import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blood } from 'src/app/models/m_blood_group';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-darah',
  templateUrl: './darah.component.html',
  styleUrls: ['./darah.component.css']
})
export class DarahComponent implements OnInit {
  blood:any =[]
  constructor() { }

  ngOnInit(): void {
    this.testapi()
  }

  public testapi ():void{
    const url = "https://opensheet.elk.sh/1Cyob8lBteBVTQLaPZ_r99ba9laeGpRRt_jhqttt_804/golongandarah"
    fetch(url).then((res) => res.json())
    .then((data) => {this.blood =data
      // // data.forEach((row) => {
      // //   // Do something with each row here.
      // });
    });
    
  }
  public getBloodGroup(): void {
    // this.bloodGroup.getBlood().subscribe(
    //   (response: any) => {
    //     this.blood = response.result;
    //   }, (error: HttpErrorResponse) => {
    //     alert(error.message)
    //   }
    // )
  }

  public onSearchBlood(cari: any) {
    // if (cari !== '' && cari !== ' ') {
    //   this.bloodGroup.searchBlood(cari).subscribe(
    //     (response: any) => {
    //       this.blood = response.result
    //     }, (error: HttpErrorResponse) => {
    //       alert(error.message)
    //     }
    //   )
    // }
    // else { this.getBloodGroup() }
  }

  public peringatan = false
  public onAddBloodGroup(addForm: NgForm): void {

    // let sama = 0
    // for (let i = 0; i < this.blood.length; i++) {
    //   if (addForm.value.code == this.blood[i].code) {
    //     sama++
    //   }
    // }

    // if (sama < 1) {
    //   this.bloodGroup.addBlood(addForm.value).subscribe(
    //     (response: Blood) => {
    //       this.getBloodGroup();
    //       addForm.reset();
    //       this.onOpenModal(null!!,'tambah')
    //       this.peringatan= false
    //     }, (error: HttpErrorResponse) => {
    //       alert(error.message);
    //       addForm.reset();
    //     }
    //   )
    // } else { this.peringatan = true }
    // console.log(this.peringatan)


  }

  public onEditBloodGroup(blood: Blood): void {
  //   let sama = 0
  //   for (let i = 0; i < this.blood.length; i++) {
  //     if (blood.code == this.blood[i].code) {
  //       sama++
  //     }
  //   }

  //   if (sama < 1) {
  //   this.bloodGroup.editBlood(blood).subscribe(
  //     (response: Blood) => {
  //       this.getBloodGroup();
  //       this.onOpenModal(null!!,'tambah')
  //       this.editsama = false
  //     }, (error: HttpErrorResponse) => {
  //       alert(error.message)
  //     }
  //   )
  // }else {this.editsama = true}
}

  public onDeleteBloodGroup(id: number): void {
    // this.bloodGroup.deleteBlood(id).subscribe(
    //   (response: any) => {
    //     this.bloodGroup;
    //     this.getBloodGroup()
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // )
  }

  public onOpenModal(blo: Blood, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');

    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
  
    if (mode === 'tambah' ) {
      button.setAttribute('data-bs-dismiss', 'modal');
    
    }
    
    // if (mode === 'add') {
    //   button.setAttribute('data-bs-target', '#addBloodModal');
    // }

    // if (mode === 'edit') {
    //   this.editBlood = blo;
    //   button.setAttribute('data-bs-target', '#editBloodModal');
    // }

    // if (mode === 'delete') {
    //   this.deleteBlood = blo;
    //   button.setAttribute('data-bs-target', '#deleteBloodModal');
    // }


    container!.appendChild(button);
    button.click();
  }

}
