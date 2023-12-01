import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgForm-Project';
  userData:any =[];
  dataHeaders:any=[];
  modalData:any={};
  showModal:boolean = false;
  editDataIndex:number = -99;
  

  getData(data:NgForm) {
    this.userData = [...this.userData, data];
    this.dataHeaders = [...Object.keys(data),"actions"];
    console.log("da", data)
  }

  deleteRow(index:number){
    this.userData.splice(index,1) //splice(from what index, how many elements to delete)
  }

  editRow(index:number){
    const rowData = this.userData[index]
    this.modalData = rowData;
    this.editDataIndex = index;
    this.showModal = true;
  }

  setEditModalRecord(data:NgForm) {
    if(this.editDataIndex != -99){
      this.userData[this.editDataIndex] = data;
    }
    this.closeModal()
  }

  closeModal() {
    this.editDataIndex = -99;
    this.showModal = false;
  }
}

