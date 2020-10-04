import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FinkartService } from '../finkart.service';

@Component({
  selector: 'app-forgotpassword1',
  templateUrl: './forgotpassword1.component.html',
  styleUrls: ['./forgotpassword1.component.css']
})
export class Forgotpassword1Component implements OnInit {
  forgotPasswordForm:FormGroup;
  submitted:boolean=false;
  invalidforgotPassword:boolean=false;
  otp:string;
  constructor(private formBuilder:FormBuilder,private router: Router,private finkartService:FinkartService) { }

  ngOnInit(): void {
  this.forgotPasswordForm=this.formBuilder.group({
    email:['',Validators.required]
  })
  }
  onSubmit(){
    alert("hi");
    this.finkartService.sendOtp(this.forgotPasswordForm.controls.email.value).subscribe(data=>{this.otp=<string>data;
      localStorage.setItem("otp",this.otp);
      localStorage.setItem("mail",this.forgotPasswordForm.controls.email.value);
      this.router.navigate(['/forgotpassword2']);
    });
  }

}
