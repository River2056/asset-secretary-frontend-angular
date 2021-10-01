import { Component, Input, OnInit } from '@angular/core';
import { Stock } from 'src/app/interface/stock';

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.css']
})
export class StockTableComponent implements OnInit {
  displayedColumns: string[] = ['stockId', 'stockName', 'currentPrice', 'percentage', 'modifyDate'];
  @Input() stockData: Stock[];

  constructor() { }

  ngOnInit(): void {
  }

  getNumberFromPercentage(percentage: string): number {
    return parseFloat(percentage);
  }

}
