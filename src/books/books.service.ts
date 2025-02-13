import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActionError } from 'shared/errors/action-error.enum';
import { EntityNotFoundError } from 'shared/errors/entity-not-found.error';
import { EntityError } from 'shared/errors/entity.error';
import { Repository } from 'typeorm';
import { Result } from 'typescript-result';
import { CreateBookRequest } from './dto/create-book.request';
import { UpdateBookRequest } from './dto/update-book.request';
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

  public async update(
    id: string,
    request: UpdateBookRequest,
  ): Promise<Result<string, EntityError | EntityNotFoundError>> {
    const bookExists = await this.booksRepository.find({
      where: { id },
    });

    if (!bookExists) {
      return Result.error<EntityNotFoundError>(
        new EntityNotFoundError(BookEntity.name, id),
      );
    }

    const updatedBook = await this.booksRepository.preload({
      ...request,
    });

    if (!updatedBook) {
      return Result.error<EntityError>(
        new EntityError(BookEntity.name, ActionError.UPDATE),
      );
    }

    try {
      const savedBook = await this.booksRepository.save(updatedBook);
      return Result.ok<string>(savedBook.id);
    } catch {
      return Result.error<EntityError>(
        new EntityError(BookEntity.name, ActionError.CREATE),
      );
    }
  }
}
