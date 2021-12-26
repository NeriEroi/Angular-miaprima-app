import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondoComponent } from './secondo-component/secondo-component.component';

const routes: Routes = [
  {
    path: 'route',
    component: SecondoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
