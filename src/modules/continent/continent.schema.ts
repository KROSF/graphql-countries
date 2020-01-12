import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class Continent {
  @Field()
  code: string

  @Field()
  name: string
}
