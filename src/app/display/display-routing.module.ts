import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayScreenComponent } from './containers/display-screen/display-screen.component';



const routes: Routes = [
  { path: 'list', 
  component: DisplayScreenComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayRoutingModule { }
