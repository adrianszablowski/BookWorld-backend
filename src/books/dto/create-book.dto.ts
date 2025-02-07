import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({
    example: 'Harry Potter',
    description: 'Book title',
    nullable: false,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  readonly title: string;
}
