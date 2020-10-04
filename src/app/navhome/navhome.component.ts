import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navhome',
  templateUrl: './navhome.component.html',
  styleUrls: ['./navhome.component.css']
})
export class NavhomeComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit(): void {
    if(localStorage.getItem("username")!=null){
      if(localStorage.getItem("username")=='swap')
        this.router.navigate(['/homeloggedinadmin']);
      else
       this.router.navigate(['/homeloggedin']);
     }
  }

}
