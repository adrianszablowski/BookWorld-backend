import { ApiProperty } from '@nestjs/swagger';

export class BooksEntity {
  @ApiProperty({ example: 'Book 1', description: 'Title of the book' })
  title: string;
}
