import { TypeModel } from './type.model';

export class DoorModel {
    Name: string;
    Room: string;
    Building: string;
    Floor: string;
    Height: string;
    Width: string;
    Lock?: TypeModel;
    Cylinder?: TypeModel;
    Frame?: TypeModel;
    done?: boolean;
}