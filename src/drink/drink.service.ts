import { Inject, Injectable } from '@nestjs/common';
import { Drink } from './drink.entity';
import { DrinkDto } from './dto/drink.dto';
import { DRINK_REPOSITORY } from 'src/core/constants';

@Injectable()
export class DrinkService {
  public drinks: Drink[];
  constructor(
    @Inject(DRINK_REPOSITORY) private drinkRepository: typeof Drink,
  ) {}
  async createDrink(drink: DrinkDto): Promise<Drink> {
    return await this.drinkRepository.create(drink as any);
  }
  async getDrinks() {
    return await this.drinkRepository.findAll();
  }
  getDrink(id: string) {
    return this.drinkRepository.findOne({ where: { id } });
  }
  deleteDrink(id: string) {
    id;
  }
}
