import { Component, Input } from '@angular/core';
import { Passenger } from '../../model/passenger-interface';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
            <span class="status"
            [class.checked-in]="detail.checkedIn"></span>
            {{detail.fullname}}
            <!--- <p>{{ passenger | json}}</p> --->
            <div>
                Check In Date:
                {{ detail.checkedIn ? (detail.checkInDate | date: 'yMMMMd') : 'Not checked In'}}
            </div>
            <div>
                Children: {{ detail.children?.length || 0 }}
            </div>
        </div>
    `
})
export class PassengerDetailComponent {
    @Input()
    detail: Passenger;
    constructor() {}
}
