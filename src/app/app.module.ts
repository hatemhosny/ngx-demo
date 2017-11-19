import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule,
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
