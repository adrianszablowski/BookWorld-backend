import { Field, ObjectType } from '@nestjs/graphql';
import { FilterField, SortingField } from 'nestjs-graphql-tools';
import { BaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';
import { bookEntity, bookFields } from '../books.consts';

@ObjectType()
@Entity(bookEntity.name)
export class BookEntity extends BaseEntity {
  @Field(() => String, {
    name: bookFields.title.name,
    description: bookFields.title.description,
    nullable: false,
  })
  @FilterField(() => String, { sqlExp: bookEntity.fields.title })
  @SortingField({ sqlExp: bookEntity.fields.title })
  @Column({ name: bookEntity.fields.title, nullable: false, type: String })
  public title: string;
}
