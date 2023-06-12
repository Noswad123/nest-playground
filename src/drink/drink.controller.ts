import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Drink } from './interface/drink';
import { DrinkService } from './drink.service';
import { DrinkDto } from './dto/drink.dto';

@Controller('drink')
export class DrinkController {
  constructor(private readonly drinkService: DrinkService) {}
  @Get()
  async getUsers(): Promise<Drink[]> {
    return await this.drinkService.getDrinks();
  }

  @Post()
  createDrink(@Body() drink: DrinkDto) {
    this.drinkService.createDrink(drink);
  }
  @Delete(':id')
  deleteDrink(@Param('id') id: string) {
    this.drinkService.deleteDrink(id);
  }
}
