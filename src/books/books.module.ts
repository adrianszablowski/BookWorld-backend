import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './books.controller';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';
import { BookEntity } from './entities/book.entity';

@Module({
  controllers: [BooksController],
  providers: [BooksService, BooksResolver],
  imports: [TypeOrmModule.forFeature([BookEntity])],
  exports: [BooksService],
})
export class BooksModule {}
