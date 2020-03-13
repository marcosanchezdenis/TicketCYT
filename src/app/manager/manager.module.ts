import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerControlComponent } from './containers/manager-control/manager-control.component';
import { QueueViewComponent } from './components/queue-view/queue-view.component';
import { QueueOptionsComponent } from './components/queue-options/queue-options.component';
import { ManagerRoutingModule } from './manager-routing.module';




@NgModule({
  declarations: [ManagerControlComponent, QueueViewComponent, QueueOptionsComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
