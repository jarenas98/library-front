import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogComponent } from './components/log/log.component';

const routes: Routes = [{
  path: '',
  component: LogComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
