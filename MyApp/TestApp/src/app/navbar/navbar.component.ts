import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
// logOff user
logOut():void{
  if(localStorage.getItem("username")!=null){
    localStorage.removeItem("username");
    this.router.navigate(['/home']);
  }
}
}
