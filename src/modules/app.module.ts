import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ContinentModule } from './continent/continent.modules'
import { CountryModule } from './country/country.module'
import { LanguageModule } from './language/language.module'

@Module({
  imports: [
    ContinentModule,
    CountryModule,
    LanguageModule,
    GraphQLModule.forRootAsync({
      useFactory: () => ({
        autoSchemaFile: 'schema.gql',
        debug: false,
        playground: false,
      }),
    }),
  ],
})
export class AppModule {}
