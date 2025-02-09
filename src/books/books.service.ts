import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActionError } from 'shared/errors/action-error.enum';
import { EntityError } from 'shared/errors/entity.error';
import { Repository } from 'typeorm';
import { Result } from 'typescript-result';
import { CreateBookRequest } from './dto/create-book.request';
import { BookEntity } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookEntity)
    private booksRepository: Repository<BookEntity>,
  ) {}

  public async create(
    request: CreateBookRequest,
  ): Promise<Result<string, EntityError>> {
    const newBook = this.booksRepository.create({
      ...request,
    });

    try {
      const savedBook = await this.booksRepository.save(newBook);
      return Result.ok<string>(savedBook.id);
    } catch {
      return Result.error<EntityError>(
        new EntityError(BookEntity.name, ActionError.CREATE),
      );
    }
  }
}
