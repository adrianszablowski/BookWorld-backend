import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class BooksResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello';
  }
}
