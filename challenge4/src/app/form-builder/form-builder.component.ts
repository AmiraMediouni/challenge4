import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  constructor (private fb:FormBuilder){}
  get name(){
    return this.userForm.get('name')
  }
  get email(){
    return this.userForm.get('email')
  }
  get typeCarte(){
    return this.userForm.get('payementInformations')?.get('typeCarte')
  }
  get numero(){
    return this.userForm.get('payementInformations')?.get('numero')
  }
  pattern_email="[a-z0-9]+\.[a-z0-9]+@[a-z0-9.-]+\.[a-z]{3}$"
  pattern_numero="[0-9]{16}"
    userForm=this.fb.group({
      name : ['' ,[Validators.required,Validators.minLength(3)]],
      email : ['',[Validators.required, Validators.pattern(this.pattern_email)]],
      payementInformations : this.fb.group({
        typeCarte: ['',[Validators.required]],
        numero : ['',[Validators.required,Validators.pattern(this.pattern_numero)]],
        dateExpiration : [''],
        code : ['']
      })
    })
  
  

}
