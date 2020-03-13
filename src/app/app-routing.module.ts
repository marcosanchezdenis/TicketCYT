import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'client', 
  loadChildren: () => import('./client/client.module').then(m =>     
  m.ClientModule) 
},

{ path: 'display', 
loadChildren: () => import('./display/display.module').then(m =>     
m.DisplayModule) 
},

{ path: 'manager', 
loadChildren: () => import('./manager/manager.module').then(m =>     
m.ManagerModule) 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
