import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-datauploud',
  templateUrl: './datauploud.page.html',
  styleUrls: ['./datauploud.page.scss'],
})
export class DatauploudPage implements OnInit {
  post:any = {};
  constructor(private http : HttpClient, private toastCtrl: ToastController) { }

  ngOnInit() {
  }


  submit(){
    this.http.post("https://reqres.in/api/users", this.post).subscribe((res:any) => {
      console.log(res);
      this.toastCtrl.create({
        duration: 3000,
        color: "success",
        message: "ID for new Item is " + res.id,
      }).then(l => l.present())
    })
  }

  delete(){
    this.http.delete("https://reqres.in/api/users/2").subscribe((res:any) => {
      console.log(res);
      this.toastCtrl.create({
        duration: 3000,
        color: "success",
        message: "ID for new Item is " + res.id,
      }).then(l => l.present())
    })
  }

  edit(){
    this.http.put("https://reqres.in/api/users/2", this.post).subscribe((res:any) => {
      console.log(res);
      this.toastCtrl.create({
        duration: 3000,
        color: "success",
        message: "ID for new Item is " + res.id,
      }).then(l => l.present())
    })
  }
}
