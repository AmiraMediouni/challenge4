import { Component } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge4';
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
