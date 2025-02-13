import {
  Body,
  Controller,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { errorResult } from 'shared/errors/error.result';
import { BooksService } from './books.service';
import { CreateBookRequest } from './dto/create-book.request';
import { UpdateBookRequest } from './dto/update-book.request';

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

  @ApiParam({
    name: 'id',
    type: String,
    description: 'ID of the book to be updated',
  })
  @ApiBody({
    type: UpdateBookRequest,
    description: 'Data required to update the book',
  })
  @ApiResponse({
    status: 200,
    type: String,
    isArray: false,
    description: 'ID of the updated book',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data provided',
  })
  @ApiResponse({
    status: 409,
    description: 'Book with similar data already exists',
  })
  @ApiResponse({
    status: 500,
    description: 'An error occurred while updating the book',
  })
  @ApiOperation({ description: 'Update an existing book' })
  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookRequest,
    @Res() res: Response,
  ): Promise<Response> {
    const result = await this.booksService.update(id, updateBookDto);

    return result.fold(
      (value) => res.status(HttpStatus.OK).json(value),
      (error) => errorResult(error, res),
    );
  }
}
