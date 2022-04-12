import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { PaymentMethod } from 'src/app/models/m_payment';


@Component({
  selector: 'app-pembayaran',
  templateUrl: './pembayaran.component.html',
  styleUrls: ['./pembayaran.component.css']
})
export class PembayaranComponent implements OnInit {

  public payment: any = [];
  public editPayment: PaymentMethod
  public deletepayment: PaymentMethod
  public sorted = 'name'
  public alphabet = /[a-zA-Z]/
  public pesan = ""
  public addpayment: PaymentMethod
  // pageing
  public sizePagination: number[] = [5, 10, 15]
  public p: number = 1;
  public count = 5
  public hidden = false
  constructor() {
    this.addpayment = {} as PaymentMethod
    this.editPayment = {} as PaymentMethod
    this.deletepayment = {} as PaymentMethod
  }
  // private ps: MPaymentMethodService
  ngOnInit(): void {
    this.onGetJenisPembayaran()
  }

  public onGetJenisPembayaran() {
    // this.ps.getJenisPembayaran().subscribe(
    //   (response: any) => {
    //     this.payment = response.result;
    //     this.getFilter('asc')
    //   }
    // ),
    //   (error: HttpErrorResponse) => {
    //     alert(error.message)
    //   }
  }

  public onAddJenisPembayaran(add: NgForm) {
    let trimName = add.value.name.trim();
    let count = 0
    console.log(trimName.toLowerCase());
    if (this.alphabet.test(trimName)) {
      for (let i = 0; i < this.payment.length; i++) {
        if (this.payment[i].name.toLowerCase() === trimName.toLowerCase()) {
          console.log(this.payment[i]);
          count++
          i = this.payment.length
        }
      }
      if (count == 0) {
        count=0
        // this.ps.addJenisPembayaran(trimName).subscribe(
        //   (response: any) => {
        //     this.onGetJenisPembayaran()
        //     this.openModal(null!, 'success')
        //     add.reset()
        //     this.pesan = ""
        //   },
        //   (error: HttpErrorResponse) => {
        //     alert(error.message)
        //     add.reset()
        //   }
        // )
      } else {
        this.hidden = true
        this.pesan = "*Data Sudah ada"
      }
    } else {
      this.hidden = true
      this.pesan = "*Tidak Boleh Kosong"
    }
  }

  onGetEditJenissPembayaran(payment: PaymentMethod) {
    let trimName = payment.name.trim();
    console.log(trimName);
    let count = 0
    console.log(trimName.toLowerCase());
    if (this.alphabet.test(trimName)) {
      for (let i = 0; i < this.payment.length; i++) {
        if (this.payment[i].name.toLowerCase() === trimName.toLowerCase()) {
          console.log(this.payment[i]);
          count++
          i = this.payment.length
        }
      }
      if (count == 0) {
        // count=0
        // this.ps.editJenisPembayaranid(payment).subscribe(
        //   (response: PaymentMethod) => {
        //     this.onGetJenisPembayaran()
        //     this.openModal(null!, 'success')
        //   },
        //   (error: HttpErrorResponse) => {
        //     alert(error.message)
        //   }
        // )
      } else {
        this.hidden = true
        this.pesan = "*Data Sudah ada"
      }
    } else {
      this.hidden = true
      this.pesan = "*Tidak Boleh Kosong"
    }
    
   
  }
  onGetSearched(name: any) {
    // console.log(name)
    // name == '' ? this.onGetJenisPembayaran() :
    //   this.ps.SearchJenisPembayaran(name).subscribe(
    //     (response: any) => {
    //       this.payment = response.result;
    //       this.p = 1
    //     },
    //     (error: HttpErrorResponse) => {
    //       alert(error.message)
    //     }
    //   )
  }

  onDelete(id: number) {
    // this.ps.deleteJenisPembayaranid(id).subscribe(
    //   (response: any) => {
    //     this.onGetJenisPembayaran()
    //     this.openModal(null!,'deleteModal')
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message)
    //   }
    // )
  }

  setDataOfPagination(x: any) {
    console.log(x)
    this.count = x
    this.p = 1
    this.onGetJenisPembayaran()
  }


  public getFilter(model: any) {
    // this.ps.filteredData(this.sorted, model).subscribe(
    //   (response: any) => {
    //     this.payment = response.result

    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message)
    //   }
    // )
  }
  openModal(pay: PaymentMethod, mode: string): void {
    const container = document.getElementById('main-container')
    const button = document.createElement('button')

    button.type = 'button'
    button.style.display = 'none'
    button.setAttribute('data-bs-toggle', 'modal')

    if (mode == 'add') {
      this.addpayment = pay
      button.setAttribute('data-bs-target', '#tambah')
    }

    if (mode == 'edit') {
      this.editPayment = pay
      console.log(this.editPayment)
      button.setAttribute('data-bs-target', '#edit')
    }
    if (mode == 'delete') {
      this.deletepayment = pay
      button.setAttribute('data-bs-target', '#delete')
    }

    if (mode == 'success') {
      button.setAttribute('data-bs-target', '#success')
    }
    if (mode == 'deleteModal') {
      button.setAttribute('data-bs-target', '#deleteModal')
    }


    container!.appendChild(button)
    button.click()
  }
  onClose(){
    this.hidden =false
    this.pesan = ""
  }

}
