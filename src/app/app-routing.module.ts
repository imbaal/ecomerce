import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './pages/bank/bank.component';
import { CaridokterComponent } from './pages/caridokter/caridokter.component';
import { DarahComponent } from './pages/darah/darah.component';
import { DompetComponent } from './pages/dompet/dompet.component';
import { HomeComponent } from './pages/home/home.component';
import { ObatComponent } from './pages/obat/obat.component';
import { PembayaranComponent } from './pages/pembayaran/pembayaran.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'darah', component: DarahComponent},
  {path: 'obat', component: ObatComponent},
  {path: 'bank', component: BankComponent},
  {path: 'pembayaran', component: PembayaranComponent},
  {path: 'caridokter', component: CaridokterComponent},
  {path: 'dompet', component: DompetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation:'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
