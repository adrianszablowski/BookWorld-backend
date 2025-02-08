import { Type } from 'class-transformer';
import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';
import { bookEntity } from '../books.consts';

@Entity({ name: bookEntity.name })
export class BookEntity extends BaseEntity {
  @Column({ nullable: false })
  @Type(() => String)
  title: string;
}
