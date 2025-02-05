import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BooksEntity } from './entities/books.entity';

@Injectable()
export class BooksService {
  private readonly books: BooksEntity[] = [];

  async create(book: CreateBookDto): Promise<BooksEntity> {
    // eslint-disable-next-line @typescript-eslint/await-thenable
    await this.books.push(book);

    return book;
  }
}
