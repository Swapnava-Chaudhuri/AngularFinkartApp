import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import {Router} from "@angular/router"
import { Login } from '../classes/Login';
import { FinkartService } from '../finkart.service';
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
  login:Login;
  type:string;
  constructor(private formBuilder: FormBuilder,private router: Router,private finkartService:FinkartService ) { 
    this.login=new Login();
    this.login.type='user';
  }
  

  onSubmit(){
    
    this.submitted = true;
    
      this.login.password=this.loginForm.controls.password.value;
      this.login.username=this.loginForm.controls.username.value;
      this.finkartService.getLogin(this.login).subscribe(data=>{this.type=<string>data;
        if(this.type=='user'){
        localStorage.setItem("username",this.loginForm.controls.username.value);
        this.router.navigate(['/dashboard']);}
        else if(this.type=='admin')
       { localStorage.setItem("username",this.loginForm.controls.username.value);
        this.router.navigate(['/admin']);}
        else
        alert("User does not exist");
      });
                         
      
                        

  }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  changeType(event:any){
    this.login.type=event.target.value;
  }
}


