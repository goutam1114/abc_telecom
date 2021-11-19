import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './components/user/user.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CreateComponent } from './components/product/create/create.component';
import { UpdateComponent } from './components/product/update/update.component';
import { DeleteComponent } from './components/product/delete/delete.component';
import { ContactComponent } from './components/contact/contact.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AdminComponent } from './components/admin/admin.component';
import { EngineerComponent } from './components/engineer/engineer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    ProductComponent,
    UserComponent,
    NotfoundComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    ContactComponent,
    CustomerComponent,
    AdminComponent,
    EngineerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
