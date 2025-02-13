import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateBookRequest {
  @ApiProperty({
    example: 'The Great Gatsby',
    description: 'Book title',
    nullable: false,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  public title: string;

  @ApiProperty({
    example:
      'A novel set in the Roaring Twenties that tells the story of Jay Gatsby and his pursuit of love and success.',
    description: 'Book description',
    nullable: false,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  public description: string;

  @ApiProperty({
    example: 'Book cover url',
    description: 'Book cover URL',
    nullable: false,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  public cover: string;

  @ApiProperty({
    example: 'F. Scott Fitzgerald',
    description: 'Book author',
    nullable: false,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  public author: string;

  @ApiProperty({
    example: 'fcfdd074-68b5-4a38-837c-4a74cfb87a45',
    description: 'Book genres',
    nullable: false,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  public genres: string;

  @ApiProperty({
    example: 4.3,
    description: 'Book rating',
    nullable: false,
    type: Number,
  })
  @Min(1)
  @Max(5)
  @IsNumber()
  @IsNotEmpty()
  public rating: number;

  @ApiProperty({
    example: 'fcfdd074-68b5-4a38-837c-4a74cfb87a45',
    description: 'Book reviews',
    nullable: true,
    type: String,
  })
  @IsString()
  @IsOptional()
  public reviews?: string;
}
