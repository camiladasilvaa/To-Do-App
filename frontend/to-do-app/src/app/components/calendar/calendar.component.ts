import { Component, NgZone, OnInit } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { environment } from '../../../environments/environment';
import { CalendarModule } from 'angular-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  standalone: true,
  imports: [],
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

}
  
