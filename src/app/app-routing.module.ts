import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyComponent } from './components/lazy/lazy.component';
import { SeguroComponent } from './components/seguro/seguro.component';

const routes: Routes = [

  { path: 'lazy', component: LazyComponent},
  { path: 'seguro', component: SeguroComponent, canActivate: [true]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
