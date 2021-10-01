import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/interface/stock';
import { CurrentPriceService } from 'src/app/services/current-price.service';

@Component({
  selector: 'app-current-price',
  templateUrl: './current-price.component.html',
  styleUrls: ['./current-price.component.css']
})
export class CurrentPriceComponent implements OnInit {
  stockData: Stock[];

  constructor(private currentPriceService: CurrentPriceService) { }

  ngOnInit(): void {
    this.stockData = this.currentPriceService.getCurrentPrices();
  }

}
