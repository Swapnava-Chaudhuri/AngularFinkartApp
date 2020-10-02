import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  registrationForm:FormGroup;

  constructor(private fb:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registrationForm=this.fb.group({
      name:['', [Validators.required,Validators.pattern('^[a-zA-Z]+$') ]],
      phone:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email:['',[Validators.required,Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      uname:['', [Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(10) ]],
      psw:['', [Validators.required, Validators.minLength(8)]],
      confirmPassword:['', Validators.required],
      birthday:['', Validators.required],
      address:['', Validators.required],
     
     acc_num:['',Validators.required,Validators.length[12]],
     ifsc:['',Validators.required],
    
     adhar:['',Validators.required], 
     pan:['',Validators.required]
     
     
     
    });
  }
  onSubmit(){
    alert("registered")
  }
  
 

}
