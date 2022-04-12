import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DefaultNominal } from 'src/app/models/t_customer_wallet';


@Component({
  selector: 'app-dompet',
  templateUrl: './dompet.component.html',
  styleUrls: ['./dompet.component.css']
})
export class DompetComponent implements OnInit {
  public defaultNominal: any[] = []
  public pesan = ""
  public hidden = false
  public editDefaultNominal: DefaultNominal
  public deletedefaultnominal: DefaultNominal
  // private walletService: TCustomerWalletService, private defaultnominalservice: MWalletDefaultNominalService
  constructor() {
    this.editDefaultNominal = {} as DefaultNominal
    this.deletedefaultnominal = {} as DefaultNominal
  }

  ngOnInit(): void {
    this.onGetNominalDefault()
  }

  public onGetNominalDefault() {
    // this.walletService.getNominalDefault().subscribe(
    //   (response: any) => {
    //     this.defaultNominal = response
    //     console.log(this.defaultNominal)
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message)
    //   }
    // )
  }
  openModal(dn: DefaultNominal, mode: string): void {
    const container = document.getElementById('main-container')
    const button = document.createElement('button')

    button.type = 'button'
    button.style.display = 'none'
    button.setAttribute('data-bs-toggle', 'modal')

    if (mode == 'add') {
      button.setAttribute('data-bs-target', '#tambah')
    }

    if (mode == 'edit') {
      this.editDefaultNominal = dn
      button.setAttribute('data-bs-target', '#edit')
    }

    if (mode == 'delete') {
      this.deletedefaultnominal = dn
      button.setAttribute('data-bs-target', '#delete')
    }
    if (mode == 'succes') {
      button.setAttribute('data-bs-target', '#success')
    }

    container!.appendChild(button)
    button.click()
  }


  onAddDefaultNominal(addForm: any) {
    let count = 0
    console.log(addForm.nominal)
    for (let i = 0; i < this.defaultNominal.length; i++) {
      if (addForm.nominal == this.defaultNominal[i].nominal) {
        count++
        i = this.defaultNominal.length
      }
    }
    if (count == 0) {
      count = 0
      // this.defaultnominalservice.addDefaultNominal(addForm.nominal).subscribe(
      //   (response: any) => {
      //     this.onGetNominalDefault()
      //     this.pesan = ""
      //     this.openModal(null!, 'succes')
      //   },
      //   (error: HttpErrorResponse) => {
      //     alert(error.message)
      //   })

    } else {
      this.pesan = '*Nominal Sudah ditambahkan'
      this.hidden = true
      count = 0
    }

  }

  onEditNominalDefault(defaultnominal: DefaultNominal) {
    let count = 0
    for (let i = 0; i < this.defaultNominal.length; i++) {
      if (defaultnominal.nominal == this.defaultNominal[i].nominal) {
        count++
        i = this.defaultNominal.length
      }
    }
    if (count == 0) {
      // this.defaultnominalservice.editDefaultNominal(defaultnominal).subscribe(
      //   (response: DefaultNominal) => {
      //     this.onGetNominalDefault()
      //     this.pesan = ""
      //     this.openModal(null!, 'succes')
      //   },
      //   (error: HttpErrorResponse) => {
      //     alert(error.message)
      //     console.log(defaultnominal)
      //   }
      // )
    } else {
      this.pesan = '*Nominal Sudah tersimpan'
      this.hidden = true
    }
  }
  onGetSearched(nominal: any) {
    // nominal == '' ? this.onGetNominalDefault() :
      // this.defaultnominalservice.searchDefaultName(nominal).subscribe(
      //   (response: any) => {
      //     console.log(response)
      //     this.defaultNominal = response
      //   },
      //   (error: HttpErrorResponse) => {
      //     alert(error.message)
      //   }
      // )
  }

  onDelete(id: number) {
    // this.defaultnominalservice.deleteNominalDefault(id).subscribe(
    //   (response: void) => {
    //     this.onGetNominalDefault()
    //   },
    //   (error: HttpErrorResponse) => {

    //   }
    // )
  }

  onClose() {
    this.hidden = false
  }
}
