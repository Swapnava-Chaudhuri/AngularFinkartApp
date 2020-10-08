import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../classes/Login';
import { Registration } from '../classes/Registration';
import { FinkartService } from '../finkart.service';

@Component({
  selector: 'app-forgotpassword3',
  templateUrl: './forgotpassword3.component.html',
  styleUrls: ['./forgotpassword3.component.css']
})
export class Forgotpassword3Component implements OnInit {
  changePasswordForm: FormGroup;
  submitted:boolean=false;
  invalidchangePassword:boolean=false;
  login:Login;
  username:string;
  resgistrations:Registration[];
  registration:Registration;

  constructor(private formBuilder: FormBuilder,private router: Router,private finkartService:FinkartService) { 
    this.login=new Login();
    this.registration=new Registration();
  }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      passOne: ['', Validators.required],
      passTwo: ['', Validators.required]
    });
  }
onSubmit(){
  //alert("form submit")
  if(this.changePasswordForm.controls.passOne.value==this.changePasswordForm.controls.passTwo.value )
  {
   // alert("same pass")
    this.updateLoginAfterGettingUsernameByEmail(localStorage.getItem("mail"))
    
  }
  else
  alert("Password Does Not Match");
}

updateLoginAfterGettingUsernameByEmail(email:string)
{   //alert(email)
  this.finkartService.getRegistrations().subscribe(data=>{
    this.resgistrations=data;
    //alert(JSON.stringify(this.resgistrations))
    for( this.registration of this.resgistrations){
      if(this.registration.email==email)
      this.username= this.registration.username;
    }
    this.login.username=this.username;
    //alert(this.login.username);
    this.login.password=this.changePasswordForm.controls.passOne.value;
    this.login.type="user";
    this.finkartService.updateLogin(this.login).subscribe(data=>{alert("Password changed")});
  });
}

}
