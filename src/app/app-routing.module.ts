import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminmodifyuserComponent } from './adminmodifyuser/adminmodifyuser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmipayerComponent } from './emipayer/emipayer.component';
import { EmitableComponent } from './emitable/emitable.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
import { Product4Component } from './product4/product4.component';
import { Product5Component } from './product5/product5.component';
import { Product6Component } from './product6/product6.component';
import { PurchasetableComponent } from './purchasetable/purchasetable.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { UsernotactivatedComponent } from './usernotactivated/usernotactivated.component';

const routes: Routes = [
  {path:'homepage', component: HomepageComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'registeration' , component: RegisterationComponent},
  {path: 'product-page' , component: ProductPageComponent},
  {path: 'dashboard' , component:DashboardComponent},
  {path:'meet-the-team',component:MeetTheTeamComponent},
  {path: 'emi-payer' , component:EmipayerComponent},
  {path: 'emi-table', component:EmitableComponent},
  {path:'footer', component:FooterComponent},
  {path:'nav-bar', component:NavbarComponent},
  {path:'product1',component:Product1Component},
  {path:'product2',component:Product2Component},
  {path:'product3',component:Product3Component},
  {path:'product4',component:Product4Component},
  {path:'product5',component:Product5Component},
  {path:'product6',component:Product6Component},
  {path:'purchase-table',component:PurchasetableComponent},
  {path:'user-not-activated',component:UsernotactivatedComponent},
  {path:'admin-home',component:AdminhomeComponent},
  {path:'admin-modify-user',component:AdminmodifyuserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent,LoginComponent,RegisterationComponent,ProductPageComponent,DashboardComponent, HomepageComponent,
  LoginComponent,RegisterationComponent,ProductPageComponent,DashboardComponent,MeetTheTeamComponent,Product1Component,
  Product2Component,Product3Component, Product4Component,Product5Component,
  Product6Component, AdminhomeComponent,AdminmodifyuserComponent,EmipayerComponent,PurchasetableComponent,EmitableComponent, NavbarComponent,
  FooterComponent, UsernotactivatedComponent]
