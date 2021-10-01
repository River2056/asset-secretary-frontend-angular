import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-widget',
  templateUrl: './time-widget.component.html',
  styleUrls: ['./time-widget.component.css']
})
export class TimeWidgetComponent implements OnInit {
  intervalId: any;
  timeString: string;
  year: string;
  month: string;
  date: string;
  hour: string;
  minute: string;
  second: string;
  dayOfWeek: string;
  isHoliday: boolean;

  constructor() { }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.getTimeString();
    }, 1000);
  }

  ngOnDestroy(): void {
    if(this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getTimeString(): void {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    let dayOfWeek = this.getDayOfWeek(date.getDay());
    this.year = `${year}`;
    this.month = `${month}`;
    this.date = `${day}`;
    this.hour = `${hour}`;
    this.minute = `${minute}`;
    this.second = `${second}`;
    this.dayOfWeek = dayOfWeek;
    this.isHoliday = this.checkIsHoliday(date.getDay());
  }

  getDayOfWeek(day: number): string {
    switch(day) {
      case 0:
        return 'Sun';
      case 1: 
        return 'Mon';
      case 2: 
        return 'Tues';
      case 3: 
        return 'Wed';
      case 4: 
        return 'Thurs';
      case 5: 
        return 'Fri';
      case 6: 
        return 'Sat';
    }
    return '';
  }

  checkIsHoliday(day: number) {
    if(day === 0 || day === 6) return true;
    return false;
  }
}
