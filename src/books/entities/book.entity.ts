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

  @Field(() => String, {
    name: bookFields.description.name,
    description: bookFields.description.description,
    nullable: false,
  })
  @FilterField(() => String, { sqlExp: bookEntity.fields.description })
  @SortingField({ sqlExp: bookEntity.fields.description })
  @Column({
    name: bookEntity.fields.description,
    nullable: false,
    type: String,
  })
  public description: string;

  @Field(() => String, {
    name: bookFields.cover.name,
    description: bookFields.cover.description,
    nullable: false,
  })
  @FilterField(() => String, { sqlExp: bookEntity.fields.cover })
  @SortingField({ sqlExp: bookEntity.fields.cover })
  @Column({
    name: bookEntity.fields.cover,
    nullable: false,
    type: String,
  })
  public cover: string;

  @Field(() => String, {
    name: bookFields.author.name,
    description: bookFields.author.description,
    nullable: false,
  })
  @FilterField(() => String, { sqlExp: bookEntity.fields.author })
  @SortingField({ sqlExp: bookEntity.fields.author })
  @Column({
    name: bookEntity.fields.author,
    nullable: false,
    type: String,
  })
  public author: string;

  // todo: relation ManyToMany
  @Field(() => String, {
    name: bookFields.genres.name,
    description: bookFields.genres.description,
    nullable: false,
  })
  @FilterField(() => String, { sqlExp: bookEntity.fields.genres })
  @SortingField({ sqlExp: bookEntity.fields.genres })
  @Column({
    name: bookEntity.fields.genres,
    nullable: false,
    type: String,
  })
  public genres: string;

  @Field(() => Number, {
    name: bookFields.rating.name,
    description: bookFields.rating.description,
    nullable: false,
  })
  @FilterField(() => Number, { sqlExp: bookEntity.fields.rating })
  @SortingField({ sqlExp: bookEntity.fields.rating })
  @Column({
    name: bookEntity.fields.rating,
    nullable: false,
    type: Number,
  })
  public rating: number;

  // todo: relation OneToMany
  @Field(() => String, {
    name: bookFields.reviews.name,
    description: bookFields.reviews.description,
    nullable: true,
    defaultValue: null,
  })
  @Column({
    name: bookEntity.fields.reviews,
    nullable: true,
    default: null,
  })
  public reviews: string | null;
}
