import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
import { Product4Component } from './product4/product4.component';
import { Product5Component } from './product5/product5.component';
import { Product6Component } from './product6/product6.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminmodifyuserComponent } from './adminmodifyuser/adminmodifyuser.component';
import { EmipayerComponent } from './emipayer/emipayer.component';
import { PurchasetableComponent } from './purchasetable/purchasetable.component';
import { EmitableComponent } from './emitable/emitable.component';
import { UsernotregisteredComponent } from './usernotregistered/usernotregistered.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
  routingComponents,
  HomepageComponent,
  LoginComponent,
  RegisterationComponent,
  ProductPageComponent,
  DashboardComponent,
  MeetTheTeamComponent,
  Product1Component,
  Product2Component,
  Product3Component,
  Product4Component,
  Product5Component,
  Product6Component,
  AdminhomeComponent,
  AdminmodifyuserComponent,
  EmipayerComponent,
  PurchasetableComponent,
  EmitableComponent,
  UsernotregisteredComponent,
  NavbarComponent,
  FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
