import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'parent-child-task';
  userDetails:any = null
  array = [1,2,3,4,5]

  currentDate = new Date()
  ngOnInit(){
   this.getData()
  }
  getData(){
    if(localStorage.getItem('userDetails')){
      this.userDetails = JSON.parse(localStorage.getItem('userDetails') ?? "")
    }
  }
  addAddress(){
    console.log('user added address field')
  }
  removeAddress(){
    console.log('user removed address field')
  }
  submitData(detailsFromChild:any){
    localStorage.setItem('userDetails',JSON.stringify(detailsFromChild))
    this.getData()
  }
}
