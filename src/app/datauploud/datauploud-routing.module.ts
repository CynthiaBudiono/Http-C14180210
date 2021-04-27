import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatauploudPage } from './datauploud.page';

const routes: Routes = [
  {
    path: '',
    component: DatauploudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatauploudPageRoutingModule {}
