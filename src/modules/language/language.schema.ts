import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Language {
  @Field()
  code: string

  @Field()
  name: string

  @Field()
  native: string

  @Field({ nullable: true })
  rtl?: number
}
