import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DarahComponent } from './pages/darah/darah.component';
import { ObatComponent } from './pages/obat/obat.component';
import { PembayaranComponent } from './pages/pembayaran/pembayaran.component';
import { BankComponent } from './pages/bank/bank.component';
import { DompetComponent } from './pages/dompet/dompet.component';
import { SpesialisComponent } from './pages/spesialis/spesialis.component';
import { CaridokterComponent } from './pages/caridokter/caridokter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    DarahComponent,
    ObatComponent,
    PembayaranComponent,
    BankComponent,
    DompetComponent,
    SpesialisComponent,
    CaridokterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
