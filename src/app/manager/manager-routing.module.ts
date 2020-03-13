import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerControlComponent } from './containers/manager-control/manager-control.component';



const routes: Routes = [
  { path: 'display', 
  component: ManagerControlComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
