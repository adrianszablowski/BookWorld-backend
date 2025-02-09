import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { errorResult } from 'shared/errors/error.result';
import { BooksService } from './books.service';
import { CreateBookRequest } from './dto/create-book.request';

@ApiTags('books')
@Controller('books')
export class BooksController {
  public constructor(private readonly booksService: BooksService) {}

  @ApiBody({
    type: CreateBookRequest,
    description: 'Data to create new Book',
  })
  @ApiResponse({
    status: 201,
    type: String,
    isArray: false,
    description: 'ID of the newly created Book',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request due to invalid input data',
  })
  @ApiResponse({
    status: 409,
    description: 'Book with same data already exists',
  })
  @ApiResponse({
    status: 500,
    description: 'Error occurred while creating new Book',
  })
  @ApiOperation({ description: 'Create a new Book' })
  @Post()
  public async create(
    @Body() createBookDto: CreateBookRequest,
    @Res() res: Response,
  ): Promise<Response> {
    const result = await this.booksService.create(createBookDto);

    return result.fold(
      (value) => res.status(HttpStatus.CREATED).json(value),
      (error) => errorResult(error, res),
    );
  }
}
