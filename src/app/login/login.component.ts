import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  constructor(private formBuilder: FormBuilder,private router: Router ) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      uname: ['', Validators.required],
      psw: ['', Validators.required]
    });
  }
  onSubmit(){
    alert("submit")
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    if(this.loginForm.controls.uname.value,
        this.loginForm.controls.psw.value){
         
    }
    else{
      this.invalidLogin = true;
    }

  }
}


