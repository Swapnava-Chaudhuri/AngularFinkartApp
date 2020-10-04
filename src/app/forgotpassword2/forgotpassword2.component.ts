import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FinkartService } from '../finkart.service';

@Component({
  selector: 'app-forgotpassword2',
  templateUrl: './forgotpassword2.component.html',
  styleUrls: ['./forgotpassword2.component.css']
})
export class Forgotpassword2Component implements OnInit {
  verifyOtpForm:FormGroup;
  submitted:boolean=false;
  invalidverifyOtp:boolean=false;
  otp:string;
  constructor(private formBuilder:FormBuilder,private router: Router,private finkartService:FinkartService) { }

  ngOnInit(): void {
    this.otp=localStorage.getItem("otp");
    this.verifyOtpForm=this.formBuilder.group({
      otp:['',Validators.required]
    })
  }
  onSubmit(){
    if(this.otp==this.verifyOtpForm.controls.otp.value)
    this.router.navigate(['/forgotpassword3']);
    else
    alert("wrong otp");
  }

}
