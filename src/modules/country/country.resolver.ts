import { NotFoundException } from '@nestjs/common'
import { Args, Query, Resolver, ResolveProperty, Parent } from '@nestjs/graphql'
import { countries, continents, languages } from 'countries-list'
import { Country } from './country.schema'
import { Continent } from '../continent/continent.schema'
import { Language } from '../language/language.schema'

@Resolver(() => Country)
export class CountryResolver {
  @Query(() => Country)
  country(@Args('code') code: string): Country {
    const country = countries[code]
    if (country) {
      return { ...country, code }
    }
    throw new NotFoundException(`country with ${code} does not exists`)
  }

  @Query(() => [Country])
  countries(): Country[] {
    return Object.entries(countries).map(([code, country]) => ({
      ...country,
      code,
    }))
  }

  @ResolveProperty(() => Continent)
  continent(@Parent() country: Country): Continent {
    const continent = continents[country.continent]
    return {
      name: continent,
      code: country.continent,
    }
  }

  @ResolveProperty(() => [Language])
  languages(@Parent() country: Country): Language[] {
    return country.languages.map(code => {
      const language = languages[code]
      return {
        ...language,
        code,
      }
    })
  }
}
