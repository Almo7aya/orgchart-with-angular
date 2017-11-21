import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ItemsCountComponent } from './items-count/items-count.component';
import { ItemsAddComponent } from './items-add/items-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    ItemsCountComponent,
    ItemsAddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
