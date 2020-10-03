import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import {Router} from "@angular/router"

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  changePasswordForm: FormGroup;

  
  constructor(private formBuilder: FormBuilder,private router: Router ) { }
  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      passOne: ['', Validators.required],
      passTwo: ['', Validators.required]
    });
  }

  onSubmit(){
    alert("Password changed")
  }
}
