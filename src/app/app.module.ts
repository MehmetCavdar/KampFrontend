import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'; //Dikkat
import {FormsModule, ReactiveFormsModule} from "@angular/forms"; //Dikkat
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"; //Dikkat

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { TodoComponent } from './components/todo/todo.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import {ToastrModule} from "ngx-toastr";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoginComponent } from './components/login/login.component'; // 21.ders kapsaminda login componenti olusunca oromatik eklenir

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    TodoComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    LoginComponent   // 21.ders kapsaminda login componenti olusunca oromatik eklenir
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  // obje formatinda service injection yapiyoruz
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}   //21.ders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
