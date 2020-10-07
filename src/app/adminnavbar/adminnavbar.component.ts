import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  

}
logOut():void{
  if(localStorage.getItem("username")!=null){
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
}
