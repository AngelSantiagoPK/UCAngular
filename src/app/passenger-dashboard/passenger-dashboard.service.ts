import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Passenger } from './model/passenger-interface';

@Injectable()
export class PassengerDashboardService {
    constructor(private http: Http) {
      console.log(this.http);
    }

        getPassengers(): Passenger[] {
            return [{
                  id: 1,
                  fullname: 'Stephen',
                  checkedIn: true,
                  checkInDate: 1490742000000,
                  children: [
                    {
                      name: 'Abby',
                      age: 2,
                    },
                    {
                      name: 'John',
                      age: 20,
                    },
                  ],
                },
                {
                  id: 2,
                  fullname: 'Jamie',
                  checkedIn: false,
                  checkInDate: 1490742000000,
                },
                {
                  id: 3,
                  fullname: 'Joe',
                  checkedIn: true,
                  checkInDate: 1490742000000,
                },
                {
                  id: 4,
                  fullname: 'Jordan',
                  checkedIn: false,
                  checkInDate: 1490742000000,
                },
                {
                  id: 5,
                  fullname: 'Jagger',
                  checkedIn: true,
                  checkInDate: 1490742000000,
                },
              ];
        }

}

