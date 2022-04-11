import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CObat } from 'src/app/models/t_cariobat';

@Component({
  selector: 'app-obat',
  templateUrl: './obat.component.html',
  styleUrls: ['./obat.component.css']
})
export class ObatComponent implements OnInit {
  constructor(){
    
  }

  ngOnInit(): void {
    this.dataawalpopup()
  }
  public statuskeranjang = false
  public jumlah: any = []
  public keranjang: any = []
  public pilihankategori: any = []
  public objekCariObat: any = {}
  // public sub: Subscription
  public page = 1

  public jumlahproduk = 0
  public tempkeranjang: any = []
  public hiden = true
  public c = 0
  public jumlahharga = 0
  public tangkapid: any = []
  public keranjangfix: any = []
  public jumlahsatuan: any = []
  public penelusuran = false
  public t: any





  public dataawalpopup(): void {
    // this.cariobatService.isiawalmodal().subscribe(
    //   (response: any) => {
    //     this.pilihankategori = response.result
    //     console.log(this.pilihankategori)
    //   }, (error: HttpErrorResponse) => {
    //     alert(error.message)
    //   }
    // )
  }


  public oncariobat(): void {
    // if (this.objekCariObat == null) return
    // this.penelusuran = true
    // this.t = this.objekCariObat
    // this.cariobatService.getObat(this.t.kategori, this.t.katakunci, this.t.jenisobat, this.t.minharga, this.t.maxharga, this.page).subscribe(
    //   (response: any) => {
    //     this.keranjang = response.result.rows;
    //     console.log(response.result.rowCount)
    //   }, (error: HttpErrorResponse) => {
    //     alert(error.message)
    //   }
    // )

  }

  public ulangicariobat(addForm: NgForm): void {
    // this.t = addForm.value
    // console.log(this.t.value.maxharga)
    // this.cariobatService.getObat(this.t.kategori, this.t.katakunci, this.t.jenisobat, this.t.minharga, this.t.maxharga, this.page).subscribe(
    //   (response: any) => {
    //     this.keranjang = response.result.rows;
    //   }, (error: HttpErrorResponse) => {
    //     alert(error.message)
    //   }
    // )

  }











  public openCariObatModal(c: CObat, mode: string): void {
    console.log(mode)
    const container = document.getElementById('main-container')
    const button = document.createElement('button')


    button.type = 'button'
    button.style.display = 'none'
    button.setAttribute('data-bs-toggle', 'modal')


    if (mode == 'CariObat') {
      button.setAttribute('data-bs-target', '#cariobatModal')
    }

    if (mode == 'UlangCari') {
      this.hiden = true
      button.setAttribute('data-bs-target', '#cariobatModal')
    }
    if (mode == 'akhirpopup') {
      this.penelusuran = true
      console.log('berhasil diubah')
    }
    if (mode == 'detail') {
      button.setAttribute('data-bs-target', '#detailprodukModal')
    }
    if (mode == 'halberikutnya') {
      this.page += 1
      this.oncariobat()
    }
    if (mode == 'halsebelumnya') {
      this.page -= 1
      this.oncariobat()
    }

    container!.appendChild(button)
    button.click()
  }




  public onTambahKeranjang(id: number, mode: string): void {
    const container = document.getElementById('main-container')
    const button = document.createElement('button')


    if (this.jumlah[id] == null) {
      this.jumlah[id] = 0
    }

    button.type = 'button'
    button.style.display = 'none'
    button.setAttribute('data-bs-toggle', 'modal')

    if (mode == 'tambahkeranjang') {
      this.statuskeranjang = true
    }
    if (mode == 'tambah') {
      this.jumlah[id] += 1

    }
    if (mode == 'kurang') {
      this.jumlah[id] -= 1
    }
    if (mode == 'beli') {
      button.setAttribute('data-bs-target', '#maubayarModal')
    }

    this.jumlahproduk = 0
    let j = 0
    this.jumlahharga = 0
    for (let i = 0; i < this.keranjang.length; i++) {
      if (this.jumlah[i] >= 1) {
        this.jumlahproduk += 1
        this.jumlahharga += this.jumlah[i] * this.keranjang[i].price_max
        this.jumlahsatuan[j] = this.jumlah[i]
        this.tangkapid[j] = i
        this.keranjangfix[j] = this.keranjang[i]
        j++
      }
    }

    container!.appendChild(button)
    button.click()
  }

  public pindahhalaman(page: number) {
    // this.cariobatService.getObat(this.t.kategori, this.t.katakunci, this.t.jenisobat, this.t.minharga, this.t.maxharga, page).subscribe(
    //   (response: any) => {
    //     this.keranjang = response.result.rows;
    //   }, (error: HttpErrorResponse) => {
    //     alert(error.message)
    //   }
    // )

  }


}
