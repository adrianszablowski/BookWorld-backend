import { IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  readonly title: string;
}
