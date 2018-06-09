import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatepickerModule, ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { InterestsComponent } from './about/interests/interests.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule,
    //the .forRoot() method will make the functionalities available in all components and modules of your project (global scope)
    //WARNING: be careful doing this often, it will clog your global scope and slow down your app
    //It is often bad practice, but makes sense for things like this
    DatepickerModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
