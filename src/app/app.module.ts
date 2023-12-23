import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { RouterModule } from '@angular/router';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    //httpclientModule est utiliser pour communique avec le backeng;
    HttpClientModule,
    //pour gerer les formulaire reactif;
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path:'home',
        component: ProductTableComponent
      },
      {
        path:'login',
        component: FormLoginComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
