import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './pages/login/login.component';
import { TestComponent } from './test/test.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { RoughComponent } from './rough/rough.component';

const routes: Routes = [
  {path:'home',component:HomepageComponent},
  {path:'navbar',component:NavBarComponent},
  {path:'login',component:LoginComponent},
  {path:'test',component:TestComponent},
  {path:'pricing',component:PricingComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'rough',component:RoughComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
