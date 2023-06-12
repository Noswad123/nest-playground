import { Module } from '@nestjs/common';
import { DrinkController } from './drink.controller';
import { DrinkService } from './drink.service';
import { drinkProviders } from './drink.provider';

@Module({
  controllers: [DrinkController],
  providers: [DrinkService, ...drinkProviders],
})
export class DrinkModule {}
