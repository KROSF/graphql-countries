import { NotFoundException } from '@nestjs/common'
import { Args, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql'
import { continents, countries } from 'countries-list'
import { Country } from '../country/country.schema'
import { Continent } from './continent.schema'

@Resolver(() => Continent)
export class ContinentResolver {
  @Query(() => Continent)
  continent(@Args('code') code: string): Continent {
    const continent = continents[code]
    if (continent) {
      return { code, name: continent }
    }
    throw new NotFoundException(`country with ${code} does not exists`)
  }

  @Query(() => [Continent])
  continents(): Continent[] {
    return Object.entries(continents).map(([code, name]) => ({
      code,
      name,
    }))
  }

  @ResolveProperty(() => [Country])
  countries(@Parent() continent: Continent): Country[] {
    return Object.entries(countries)
      .filter(entry => entry[1].continent === continent.code)
      .map(([code, country]) => ({
        ...country,
        code,
      }))
  }
}
