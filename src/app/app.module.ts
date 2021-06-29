import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { WellComponent } from './well/well.component';
import { WellListComponent } from './well-list/well-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragComponent } from './drag/drag.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { TextBoxComponent } from './text-box/text-box.component';
import { ButtonComponent } from './button/button.component';
import { LableComponent } from './lable/lable.component';
import { AddCompDirective } from './add-comp.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    WellComponent,
    WellListComponent,
    DragComponent,
    TextBoxComponent,
    ButtonComponent,
    LableComponent,
    AddCompDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgDragDropModule.forRoot()  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[TextBoxComponent, ButtonComponent, LableComponent]
})
export class AppModule { }
