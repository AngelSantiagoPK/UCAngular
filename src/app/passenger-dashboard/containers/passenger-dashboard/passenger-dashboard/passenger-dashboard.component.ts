import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../../model/passenger-interface';

@Component({
    selector: 'app-passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
    <div class='app'>
      <passenger-count
      [items]="passengers">
      </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger">
      </passenger-detail>
    </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    title = 'Airlane Passengers';
    passengers: Passenger[];

    constructor() {}

    ngOnInit(): void {
      this.passengers = [{
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: [{
          name: 'Abby',
          age: 2
        },
        {
          name: 'John',
          age: 20
        }]
      },
      {
        id: 2,
        fullname: 'Jamie',
        checkedIn: false,
        checkInDate: 1490742000000
      },
      {
        id: 3,
        fullname: 'Joe',
        checkedIn: true,
        checkInDate: 1490742000000
      },
      {
        id: 4,
        fullname: 'Jordan',
        checkedIn: false,
        checkInDate: 1490742000000
      },
      {
        id: 5,
        fullname: 'Jagger',
        checkedIn: true,
        checkInDate: 1490742000000
      }
    ];
    }
}
