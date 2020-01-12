import { Module } from '@nestjs/common'
import { ContinentResolver } from './continent.resolver'

@Module({
  providers: [ContinentResolver],
})
export class ContinentModule {}
