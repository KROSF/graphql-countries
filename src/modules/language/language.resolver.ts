import { NotFoundException } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { languages } from 'countries-list'
import { Language } from './language.schema'

@Resolver()
export class LanguageResolver {
  @Query(() => Language, { nullable: true })
  language(@Args('code') code: string): Language {
    const language = languages[code]
    if (language) {
      return { ...language, code }
    }
    throw new NotFoundException(`language with ${code} does not exists`)
  }

  @Query(() => [Language])
  languages(): Language[] {
    return Object.entries(languages).map(([code, language]) => ({
      ...language,
      code,
    }))
  }
}
