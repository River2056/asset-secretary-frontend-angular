import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TimeWidgetComponent } from './components/time-widget/time-widget.component';
import { CurrentPriceComponent } from './components/current-price/current-price.component';
import { StockTableComponent } from './components/current-price/stock-table/stock-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    TimeWidgetComponent,
    CurrentPriceComponent,
    StockTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
