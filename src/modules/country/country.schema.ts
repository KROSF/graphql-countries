import { Field, ObjectType } from 'type-graphql'
import { Continent } from '../continent/continent.schema'
import { Language } from '../language/language.schema'

@ObjectType()
export class Country {
  @Field()
  code: string

  @Field()
  name: string

  @Field()
  native: string

  @Field()
  phone: string

  @Field(() => Continent)
  continent: string

  @Field(() => [Language])
  languages: string[]

  @Field()
  currency: string

  @Field()
  emoji: string

  @Field()
  emojiU: string
}
