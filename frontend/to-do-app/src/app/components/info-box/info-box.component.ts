import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.css'
})
export class InfoBoxComponent implements OnInit, OnDestroy {

  today: Date = new Date();

  private intervalId?: number;

  ngOnInit(): void {
    this.updateTime();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateTime(): void {
    this.intervalId = window.setInterval(() => {
      this.today = new Date();
    }, 1000);

  }
}
