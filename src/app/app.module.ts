import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TitlePipe } from './title.pipe';
import { BgColorDirective } from './bg-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductListComponent,
    TitlePipe,
    BgColorDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "", component: ProductListComponent
      },
      { path: "cart", component: ShoppingCartComponent },
        
    //   path: "", component: ProductListComponent, children: [
    //     { path: "cart", component: ShoppingCartComponent },
    //   ]
    // },
      { path: "about", loadChildren: "../about/about.module#AboutModule" }
      // { path: "contact", loadChildren: "../about/about.module#AboutModule" }
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
