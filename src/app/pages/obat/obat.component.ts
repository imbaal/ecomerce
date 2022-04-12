import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
    this.testapi()
  }
  public statuskeranjang: any = []
  public jumlah: any = []
  public keranjang: any = []
  public pilihankategori: any = []
  public objekCariObat: any = {}
 
  public page = 1
  public maxpage = 0
  public tampilan: any = []
  public temptampilan: any = []
  public penelusurankategori: any = ''
  public tb = 0
  public errordong = false
  public formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  })

  public footer = false
  public jumlahhargastr = ""
  public validasihalaman = 0
  public peringatanawalpopup = false

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





  public testapi ():void{
    this.jumlahharga = 0
    this.page = 1
    this.jumlah = []
    this.jumlahproduk = 0
    this.jumlahharga = 0
    this.jumlahsatuan = []
    this.tangkapid = []
    this.keranjangfix = []
    this.jumlahhargastr = this.formatter.format(this.jumlahharga)
    this.statuskeranjang = [];

    const url = "https://opensheet.elk.sh/1Cyob8lBteBVTQLaPZ_r99ba9laeGpRRt_jhqttt_804/obat"
    fetch(url).then((res) => res.json())
    .then((data) => {this.objekCariObat =data; console.log(data)
      this.temptampilan=data
      // // data.forEach((row) => {
      // //   // Do something with each row here.
      // });
    });
    // this.errordong = false
    // this.keranjang = response.result
    this.pindahhalaman(this.page)
    // this.peringatanawalpopup = false
    
    this.maxpage = Math.ceil(this.keranjang.length / 4)
    for (let i = 0; i < this.keranjang.length; i++) {
      this.statuskeranjang[i] == false}

    
  }

  
    public oncariobat(): void {
    // if (this.objekCariObat == null) return
    // this.penelusuran = true
    // this.t = this.objekCariObat
    // if (this.t.maxharga == null) {
    //   this.t.maxharga = ""
    // }
    // if (this.t.minharga == null) {
    //   this.t.minharga = ""
    // }

    // 
    // if (this.t.kategori != "" || this.t.katakunci != "" || this.t.jenisobat != "" || this.t.minharga != "" || this.t.maxharga != "") {
      
      
      // this.cariobatService.getObat(this.t.katakunci, this.t.kategori, this.t.jenisobat, this.t.minharga, this.t.maxharga).subscribe(
      //   (response: any) => {
         


    //       }
    //     }, (error: HttpErrorResponse) => {
    //       this.errordong = true
    //     }
    //     )
      
        
    //   } else { this.peringatanawalpopup = true }

  }

  public pindahhalaman(page: number): void {
    let p = (page - 1) * 4
    this.temptampilan = []
    for (let i = 0; i < 4; i++) {
      if (this.keranjang[i + p] != undefined) {
        this.temptampilan[i] = this.keranjang[i + p]
        console.log(this.keranjang[i + p])
      }

    }
    console.log(this.temptampilan)
  }

  public ulangicariobat(): void {
    // this.t = addForm.value

    // this.page = 1
    // if (this.t.kategori != "" || this.t.katakunci != "" || this.t.jenisobat != "" || this.t.minharga != "" || this.t.maxharga != "") {
    //   this.cariobatService.getObat(this.t.katakunci, this.t.kategori, this.t.jenisobat, this.t.minharga, this.t.maxharga).subscribe()
    //   this.peringatanawalpopup = false
    //   this.openCariObatModal(null!!, 'akhirpopup')
    //   console.log('data tembus')
    // } else { this.peringatanawalpopup = true }
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
      // this.hiden = true
      // button.setAttribute('data-bs-target', '#cariobatModal')
    }
    if (mode == 'akhirpopup') {
      this.penelusuran = true
      button.setAttribute('data-bs-dismiss', 'modal')
    }
    if (mode == 'detail') {
      button.setAttribute('data-bs-target', '#detailprodukModal')
    }
    if (mode == 'halberikutnya') {
      this.page += 1

      this.pindahhalaman(this.page)
      if (this.page > 1) {
        this.validasihalaman = 1
      } else { this.validasihalaman = 0 }
    }
    if (mode == 'halsebelumnya') {
      this.page -= 1
      this.pindahhalaman(this.page)
      if (this.page > 1) {
        this.validasihalaman = 1
      } else { this.validasihalaman = 0 }
    }
    if (mode == 'reset') {

      this.reset
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
    this.tb = (this.page - 1) * 4 + id

    if (mode == 'tambahkeranjang') {
      this.statuskeranjang[this.tb] = true
      this.jumlah[this.tb] = 1
      console.log(this.tb)
      console.log(this.tb, this.page, this.statuskeranjang[this.tb])
    }
    if (mode == 'tambah') {
      this.jumlah[this.tb] += 1
      console.log(this.tb, this.page, this.jumlah[this.tb])


    }
    if (mode == 'kurang') {
      this.jumlah[this.tb] -= 1
      console.log(this.tb, this.page, this.jumlah[this.tb])
      if (this.jumlah[this.tb] < 1) {
        this.statuskeranjang[this.tb] = false
      }
    }
    if (mode == 'beli') {
      button.setAttribute('data-bs-target', '#maubayarModal')
    }

    if (mode == 'fixbeli') {
      // Swal.fire('Berhasil!!',
      //   'Produk anda telah Berhasil dibeli.',
      //   'success')
    }
    this.jumlahproduk = 0
    let j = 0
    this.jumlahharga = 110000
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
    if (this.jumlahproduk > 0) {
      this.footer = true
    } else { this.footer = false }
    this.jumlahhargastr = this.formatter.format(this.jumlahharga)
    container!.appendChild(button)
    button.click()
  }


  public reset(addForm: NgForm) {
    addForm.reset()
    addForm.controls['kategori'].setValue('');
    addForm.controls['katakunci'].setValue('');
    addForm.controls['jenisobat'].setValue('');

  }







}
