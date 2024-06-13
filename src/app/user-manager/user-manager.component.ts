import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent {
  constructor(private fb:FormBuilder){
    this.showForm()
  }
  @Input() userDetails!:any
  @Output() onAddAddress:EventEmitter<void> = new EventEmitter()
  @Output() onRemoveAddress:EventEmitter<void> = new EventEmitter()
  @Output() onDataSubmit:EventEmitter<any> = new EventEmitter()
  untouched:boolean = false
  userForm = this.fb.group({
    userId:['',[Validators.required,Validators.pattern(/^[0-9]+$/)]],
    email:['',[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    userName:['',[Validators.required,Validators.pattern(/^[a-z A-z]+$/)]],
    address: this.fb.array([
      this.fb.group({
        street:['',[Validators.required]],
        city:['',[Validators.required]],
        state:['',[Validators.required]],
        zipCode:['',[Validators.required]],
      })
    ])
  })
  showForm(){
    console.log(this.userForm)
  }
  addAddress(){
    this.userForm.controls['address'].push(this.fb.group({
      street:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      zipCode:['',[Validators.required]],
    }))
    this.onAddAddress.emit()
  }
  submitData(e:any){
    if(this.userForm.valid){
      this.onDataSubmit.emit(this.userForm.value)
      this.userForm.controls.address.clear()
      this.userForm.reset()
      this.addAddress()
    }
  }
  removeAddress(index:number){
    this.userForm.controls['address'].removeAt(index)
    this.onRemoveAddress.emit()
  }
}
