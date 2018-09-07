import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ":name", component: AboutComponent },
      { path: "contact", component: ContactComponent }
            
    ])
  ],
  declarations: [AboutComponent, ContactComponent]
})
export class AboutModule { }
