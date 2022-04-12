import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public form: any = {
    email: null,
    password: null,
    kodeOtp: null,
    setPassword: null,
    repeatPassword: null
  };

  public login: any = [];
  public isLoggedIn = false;
  public isRegisterFailed = false;
  public isLoginFailed = false;
  public pesan = "";
  public e = "";
  public penelusuran = false
  public hiden = false

  // var registrasi
  public cekEmail = true;
  public kodeOtp = false;
  public setPassword = false;
  public daftarGodoc = false;
  public currentEmail: any;
  public currentSetPassword: any;
  public currentRepeatPassword: any;

  //iqbal
  public keranjang: any = []
  public pilihankategori: any = []
  public page=1
  //iqbal

  public role: any = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // public dataawalpopup(): void {
  //   this.cariobatService.isiawalmodal().subscribe(
  //     (response: any) => {
  //       this.pilihankategori = response.result
  //       console.log(this.pilihankategori)
  //     }, (error: HttpErrorResponse) => {
  //       alert(error.message)
  //     }
  //   )
  // }

  // public oncariobat(addForm: NgForm): void {
  //   this.penelusuran = true
  //   let t = addForm.value
  //   if (t.minharga == "") { t.minharga = parseInt('0') }
  //   if (t.maxharga == "") { t.maxharga = parseInt('9999999999999999')}
  //   if (t.katakunci == "") {t.katakunci = ''}
  //   console.log(t)
  //   this.cariobatService.gantiCariObat(t);
  //   this.router.navigate(['cariobat'])


  // }

  public openCariObatModal(c: any, mode: string): void {
    console.log(mode)
    // const container = document.getElementById('main-container')
    const button = document.createElement('button')


    button.type = 'button'
    button.style.display = 'none'
    button.setAttribute('data-bs-toggle', 'modal')


    if (mode == 'CariObat') {
      button.setAttribute('data-bs-target', '#cariobatModal')
    }

    if (mode == 'UlangCari') {
      this.hiden = false
      button.setAttribute('data-bs-target', '#cariobatModal')
    }
    if (mode == 'akhirpopup') {
      this.penelusuran = true
      console.log('berhasil diubah')
    }
    if (mode == 'detail') {
      button.setAttribute('data-bs-target', '#detailprodukModal')
    }
    // container!.appendChild(button)
    button.click()
  }

}
