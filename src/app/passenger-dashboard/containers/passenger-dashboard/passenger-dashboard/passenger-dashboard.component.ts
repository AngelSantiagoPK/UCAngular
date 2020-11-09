import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from 'src/app/passenger-dashboard/passenger-dashboard.service';
import { Passenger } from '../../../model/passenger-interface';

@Component({
  selector: 'app-passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div class="app">
      <passenger-count [items]="passengers">
      </passenger-count>
      <div *ngFor="let passenger of passengers">
        {{ passenger.fullname }}
      </div>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
      >
      </passenger-detail>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  title = 'Airlane Passengers';
  passengers: Passenger[];

  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit(): void {
    this.passengers = this.passengerService.getPassengers();
  }
  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if(passenger.id === event.id){
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }
  handleRemove(event) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }
}
