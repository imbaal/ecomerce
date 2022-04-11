import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DarahComponent } from './pages/darah/darah.component';
import { HomeComponent } from './pages/home/home.component';
import { ObatComponent } from './pages/obat/obat.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'darah', component: DarahComponent},
  {path: 'obat', component: ObatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation:'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
