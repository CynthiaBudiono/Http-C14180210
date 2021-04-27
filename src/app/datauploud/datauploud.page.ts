import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-datauploud',
  templateUrl: './datauploud.page.html',
  styleUrls: ['./datauploud.page.scss'],
})
export class DatauploudPage implements OnInit {
  post:any = {};
  constructor(private http : HttpClient, private toastCtrl: ToastController, public alertController: AlertController) { }
  idedit;
  ngOnInit() {
  }


  submit(){
    this.http.post("https://reqres.in/api/users?page=2", this.post).subscribe((res:any) => {
      console.log(res);
      this.idedit= res.id;
      this.toastCtrl.create({
        duration: 3000,
        color: "success",
        message: "ID for new Item is " + res.id,
      }).then(l => l.present())
    })
  }

  async delete(){
    this.alertController.create({
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.toastCtrl.create({
              duration: 3000,
              color: "warning",
              message: "Cancel delete",
            }).then(l => l.present())
          }
        },
        {
          text: 'OK',
          handler: () => {
            console.log('Item deleted');
            this.http.delete("https://reqres.in/api/users/"+this.idedit).subscribe((res:any) =>{
              console.log(res);
              this.toastCtrl.create({
                duration: 3000,
                color: "success",
                message: "Delete data Success",
              }).then(l => l.present())     
            });
          }
        }
      ]
    }).then(l => l.present());
    this.idedit=null;
  }

  edit(){
    if(this.idedit!=null){
      this.http.put("https://reqres.in/api/users/"+this.idedit, this.post).subscribe((res:any) => {
        console.log(res);
        this.toastCtrl.create({
          duration: 3000,
          color: "success",
          message: "Edit data ID " + this.idedit + " Success",
        }).then(l => l.present())
      })
    }
    else{
      alert("insert first");
    }
  }
}
