import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgForm-Project';
  userData:any =[];
  dataHeaders:any=[]

  getData(data:NgForm) {
    this.userData = [...this.userData, data]; 
    this.dataHeaders = [...Object.keys(data), "actions"];
  }

  deleteRow(index:number){
    this.userData.splice(index,1) //splice(from what index, how many elements to delete)
  }
}
