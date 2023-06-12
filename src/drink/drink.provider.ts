import { DRINK_REPOSITORY } from 'src/core/constants';
import { Drink } from './drink.entity';

export const drinkProviders = [
  {
    provide: DRINK_REPOSITORY,
    useValue: Drink,
  },
];
