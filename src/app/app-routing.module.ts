import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EngineerComponent } from './components/engineer/engineer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CreateComponent } from './components/product/create/create.component';
import { DeleteComponent } from './components/product/delete/delete.component';
import { ProductComponent } from './components/product/product.component';
import { UpdateComponent } from './components/product/update/update.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
//create routes
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'customer',component:CustomerComponent},
  {path:'admin',component:AdminComponent},
  {path:'engineer',component:EngineerComponent},
  

  {path:'about',component:AboutComponent},
  {path:'user',component:UserComponent},
  {path:'signup',component:RegisterComponent},
  {path:'signin',component:LoginComponent},
  {path:'Login',children:[
    {path:'',component:ProductComponent},
    {path:'Customer',component:CreateComponent},
    {path:'admin',component:UpdateComponent},
    {path:'Engineer',component:DeleteComponent},
    
  
    
  ]},
  {path:'**',component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
