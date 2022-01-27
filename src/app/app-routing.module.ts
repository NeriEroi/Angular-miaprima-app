import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondoComponent } from './secondo-component/secondo-component.component';
import { TerzoComponent } from './terzo-component/terzo-component.component';

const routes: Routes = [
  {
    path: 'secondo-component',
    component: SecondoComponent,
  },
  {
    path: 'terzo-component',
    component: TerzoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
