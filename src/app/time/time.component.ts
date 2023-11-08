import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  // ... other properties ...

  private daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  private date = new Date();
  public hour: any;
  public minute: string = '';
  public second: string = '';
  public ampm: string = '';
  public day: string = '';

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    }, 1000);

    this.day = this.daysArray[this.date.getDay()];
  }

  private updateDate(date: Date) {
    const hours = date.getHours();

    this.ampm = hours >= 12 ? 'PM' : 'AM';

    this.hour = hours % 12;
    this.hour = this.hour ? this.hour : 12;
    this.hour = this.hour < 10 ? '0' + this.hour : this.hour;

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();

    this.second = seconds < 10 ? '0' + seconds : seconds.toString();

    // Check if seconds reached 60, reset to 0 and increment minutes
    if (seconds === 59) {
      this.second = '00';
      this.minute = minutes < 9 ? '0' + (minutes + 1) : (minutes + 1).toString();
    } else {
      this.minute = minutes < 10 ? '0' + minutes : minutes.toString();
    }
  }
}
