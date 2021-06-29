import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DragComponent } from './drag/drag.component';
import { UsersComponent } from './users/users.component';
import { WellListComponent } from './well-list/well-list.component';

const routes: Routes = [
  { path: 'poc-one', component: UsersComponent },
  { path: 'poc-two', component: WellListComponent },
  { path: 'poc-three', component: DragComponent },
  { path: '**', component: UsersComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
