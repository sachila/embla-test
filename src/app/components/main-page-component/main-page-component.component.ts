import { Component, OnInit } from '@angular/core';
import { DoorDetailsService } from 'src/app/services/door-details.service';
import { DoorModel } from '../models/door.model';

@Component({
    selector: 'app-main-page-component',
    templateUrl: './main-page-component.component.html',
    styleUrls: ['./main-page-component.component.css']
})
export class MainPageComponentComponent implements OnInit {

    constructor(
        private doorDetailsService: DoorDetailsService,
    ) { }

    public get doorList(): DoorModel[] {
        return this.doorDetailsService.doorList;
    }

    ngOnInit() {
    }

    public updateDoorDetails(item: DoorModel): void {
        this.doorDetailsService.updateDoorDetails(item)
    }
}
