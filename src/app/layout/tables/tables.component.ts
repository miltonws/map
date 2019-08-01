import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { LocationService } from 'src/app/service/location.service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {

    public users: Array<any> = [];


    constructor(private location: LocationService) {}

    ngOnInit() {
        this.getUSers();
    }



    public getUSers() {
        this.location.getUsers().subscribe(
            users => {
                this.users = users
            }
        )
    }
}
