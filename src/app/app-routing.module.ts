import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { RegisterationComponent } from './registeration/registeration.component';

const routes: Routes = [
  {path:'homepage', component: HomepageComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'registeration' , component: RegisterationComponent},
  {path: 'product-page' , component: ProductPageComponent},
  {path: 'dashboard' , component:DashboardComponent},
  {path:'meet-the-team',component:MeetTheTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent,LoginComponent,RegisterationComponent,ProductPageComponent,DashboardComponent]
