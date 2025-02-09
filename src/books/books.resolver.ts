import { Query, Resolver } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { BookEntity } from './entities/book.entity';

@Resolver(() => BookEntity)
export class BooksResolver {
  public constructor(private readonly bookService: BooksService) {}

  @Query(() => String, {
    name: 'books',
    description: 'List of Books',
    nullable: false,
  })
  findAll() {
    return 'Hello';
  }
}
