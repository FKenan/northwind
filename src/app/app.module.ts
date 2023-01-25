import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';    // httpclient in injecte edilebilmesi için bu yazılır ve imports a eklenir.
import { FormsModule } from '@angular/forms'; // ngModel kullanabilmek için
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ToastrModule } from 'ngx-toastr';    //npm install ile yüklediğimizi kullanabilmek için
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,   // module implemente edersek buraya yazmalıyız
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"    // toastr ı module olarak ekleyip configurasyonunu yaptık 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
