import { Component, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../classes/Registration';
import { FinkartService } from '../finkart.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  adminForm:FormGroup
  registrations:Registration[];
  toggle:boolean;
  constructor( private router:Router,private finkartService:FinkartService ){}

  ngOnInit(): void {

if(localStorage.getItem("username")!=null){
  this.finkartService.getRegistrations().subscribe(data=>{
    this.registrations=data;
  })
}
else
this.router.navigate(['/home']);
  }
onSubmit(registration:Registration){
  localStorage.setItem("moreUserDetails",JSON.stringify(registration));
  this.router.navigate(['/editregistration']);
}
}
