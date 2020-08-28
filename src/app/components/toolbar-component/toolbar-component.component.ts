import { Component, OnInit } from '@angular/core';
import { DoorModel } from '../models/door.model';
import { DoorDetailsService } from 'src/app/services/door-details.service';

@Component({
    selector: 'app-toolbar-component',
    templateUrl: './toolbar-component.component.html',
    styleUrls: ['./toolbar-component.component.css']
})
export class ToolbarComponentComponent implements OnInit {

    constructor(
        private doorDetailsService: DoorDetailsService,
    ) { }

    ngOnInit() {
    }

    public onFileChanged(event): void {
        let selectedFile: File = event.target.files[0];
        if (selectedFile.name.split('.').pop() !== 'json') {
            alert("Invalid file type. Please upload a json")
            return;
        }
        const fileReader = new FileReader();
        fileReader.readAsText(selectedFile, "UTF-8");
        fileReader.onload = () => {
            let data = (JSON.parse(fileReader.result as string)) as DoorModel[];
            if (data && data.length > 0)
                data = data.map(i => {
                    i.done = false;
                    return i;
                })
            this.doorDetailsService.updateData(data)
        }
        fileReader.onerror = (error) => {
            console.log(error);
        }
    }
}
