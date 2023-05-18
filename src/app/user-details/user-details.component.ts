import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  name!:string;
  email!:string;
  address!:string;
  userArray: Array<any> = [];

  onSave(){
    this.userArray.push({
      "name": this.name,
      "email": this.email,
      "address": this.address
    })
  }
  onDelete(index){
    this.userArray.splice(index,1);
  }
}
