import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FinkartService } from './finkart.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule,Routes} from '@angular/router';
import { MeettheteamComponent } from './meettheteam/meettheteam.component';
import { NavhomeComponent } from './navhome/navhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeloggedinComponent } from './homeloggedin/homeloggedin.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { HomeloggedinadminComponent } from './homeloggedinadmin/homeloggedinadmin.component';
import { HomecommonComponent } from './homecommon/homecommon.component';
import { EditregistrationComponent } from './editregistration/editregistration.component';
import { Forgotpassword1Component } from './forgotpassword1/forgotpassword1.component';
import { Forgotpassword2Component } from './forgotpassword2/forgotpassword2.component';
import { Forgotpassword3Component } from './forgotpassword3/forgotpassword3.component';
import { EmitableComponent } from './emitable/emitable.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
import { Product4Component } from './product4/product4.component';
import { Product5Component } from './product5/product5.component';
import { Product6Component } from './product6/product6.component';
import { Product7Component } from './product7/product7.component';
import { Product8Component } from './product8/product8.component';
import { Product9Component } from './product9/product9.component';
import { Product10Component } from './product10/product10.component';



const routes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'meettheteam',component:MeettheteamComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminhomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'homeloggedin',component:HomeloggedinComponent},
  {path:'homeloggedinadmin',component:HomeloggedinadminComponent},
  {path:'editregistration',component:EditregistrationComponent},
  {path:'forgotpassword1',component:Forgotpassword1Component},
  {path:'forgotpassword2',component:Forgotpassword2Component},
  {path:'forgotpassword3',component:Forgotpassword3Component},
  {path:'emitable',component:EmitableComponent},
  {path:'productlist',component:ProductPageComponent},
  {path:'product1',component:Product1Component},
  {path:'product2',component:Product2Component},
  {path:'product3',component:Product3Component},
  {path:'product4',component:Product4Component},
  {path:'product5',component:Product5Component},
  {path:'product6',component:Product6Component},
  {path:'product7',component:Product7Component},
  {path:'product8',component:Product8Component},
  {path:'product9',component:Product9Component},
  {path:'product10',component:Product10Component},
  {path:'**',redirectTo:'home'}
]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    NavbarComponent,
    MeettheteamComponent,
    NavhomeComponent,
    DashboardComponent,
    AdminhomeComponent,
    FooterComponent,
    HomeloggedinComponent,
    AdminnavbarComponent,
    HomeloggedinadminComponent,
    HomecommonComponent,
    EditregistrationComponent,
    Forgotpassword1Component,
    Forgotpassword2Component,
    Forgotpassword3Component,
    EmitableComponent,
    ProductPageComponent,
    Product1Component,
    Product2Component,
    Product3Component,
    Product4Component,
    Product5Component,
    Product6Component,
    Product7Component,
    Product8Component,
    Product9Component,
    Product10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(routes),
    ReactiveFormsModule,HttpClientModule,FormsModule
  ],
  providers: [FinkartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
