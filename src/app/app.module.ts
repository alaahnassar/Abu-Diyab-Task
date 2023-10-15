import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { VerticalComponent } from './layouts/vertical/vertical.component';
import { SimplebarAngularModule } from 'simplebar-angular';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    VerticalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SimplebarAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
