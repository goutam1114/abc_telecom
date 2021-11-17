import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
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
  {path:'about',component:AboutComponent},
  {path:'user',component:UserComponent},
  {path:'signup',component:RegisterComponent},
  {path:'signin',component:LoginComponent},
  {path:'product',children:[
    {path:'',component:ProductComponent},
    {path:'create',component:CreateComponent},
    {path:'update',component:UpdateComponent},
    {path:'delete',component:DeleteComponent},
    
  
    
  ]},
  {path:'**',component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
