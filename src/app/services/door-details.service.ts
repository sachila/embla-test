import { Injectable } from '@angular/core';
import { DoorModel } from '../components/models/door.model';

@Injectable({
    providedIn: 'root'
})
export class DoorDetailsService {

    // assuming Name property is unique. we can keep a dictionary to maintain data.
    // This is much efficient compare to dealing with arrays.
    private _doorList: { [key: string]: DoorModel } = {};

    updateData(list: DoorModel[]) {
        if (!list) return;

        // don't replace the original data. only update it.
        list.forEach((item) => {
            if (this._doorList[item.Name]) {
                if (!this._doorList[item.Name].done) this._doorList[item.Name] = item;
            }
            else {
                this._doorList[item.Name] = item;
            }
        })
    }

    public get doorList(): DoorModel[] {
        return Object.values(this._doorList);
    }

    // update single door item
    public updateDoorDetails(item): void {
        if (this._doorList[item.Name]) {
            this._doorList[item.Name] = item;
        }
    }

    constructor() { }
}
