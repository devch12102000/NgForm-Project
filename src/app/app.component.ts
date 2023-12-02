import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //@ViewChild('basicForm') basicForm: NgForm;
  title = 'NgForm-Project';
  userData:any =[];
  dataHeaders:any=[];
  //modal:any={};
  modalData:any={};
  showModal:boolean = false;
  editDataIndex:number = -99;
  personaldetail:boolean=true;
  professionaldetail=false;
  identitydetail=false;


  constructor(
    // private readonly fb: FormBuilder
  ){ }
ngOnInit(): void {

}
// reset(basicForm:NgForm){
//   basicForm.reset()}

  getData(data:NgForm) {
    debugger
    this.userData = [...this.userData, data];
    this.dataHeaders = [...Object.keys(data),"actions"];
    //this.basicForm.form.value.reset();
    console.log("da", data)

  }

  // getData(data:NgForm) {
  // const formData = new FormData();

  //   formData.append('name', this.userData.Name);
  //   formData.append('postal_address', this.userData.Address);
  //   formData.append('designation', this.userData.Gender);
  //   formData.append('contact_person', this.userData.Role);
  //   formData.append('contact_person', this.userData.Citizenship);
  //   formData.append('contact_person', this.userData.uploadfile);
  //   console.log("formData", formData);
  // }

  deleteRow(index:number){
    this.userData.splice(index,1) //splice(from what index, how many elements to delete)
  }

  editRow(index:number){
    const rowData = this.userData[index]
    this.modalData = rowData;
    this.editDataIndex = index;
    this.showModal = true;
    console.log(this.modalData.Name)
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



  NextPersonalDetail(){
    this.personaldetail=false;
    this.professionaldetail=true; //takes to professional page 2
    this.identitydetail=false;
  }

  NextProfessionalDetail(){
    this.personaldetail=false;
    this.professionaldetail=false;
    this.identitydetail=true; //takes to identity page 3
  }

  BackProfessionalDetail(){
    this.personaldetail=true; //takes to personal page 1
    this.professionaldetail=false;
    this.identitydetail=false;

  }

  BackIdentityDetail(){
    this.personaldetail=false;
    this.professionaldetail=true; //takes to professional page 1
    this.identitydetail=false;

  }

}

