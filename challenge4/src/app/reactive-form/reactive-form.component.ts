import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  userForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    payementInformations:new FormGroup({
      typeCarte:new FormControl(''),
      numero:new FormControl(''),
      dateExpiration:new FormControl('')  ,
      code:new FormControl('')    
})
  })
}
