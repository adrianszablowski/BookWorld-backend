import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookRequest {
  @ApiProperty({
    example: 'Harry Potter',
    description: 'Book title',
    nullable: false,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  public title: string;
}
