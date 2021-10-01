import { Injectable } from '@angular/core';

import { Stock } from '../interface/stock';
import { data } from '../data';

@Injectable({
  providedIn: 'root'
})
export class CurrentPriceService {
  stockData: Stock[] = data;

  constructor() { }

  getCurrentPrices(): Stock[] {
    return this.stockData;
  }
}
