import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dataPOST = [];
  loading: any;
  post:any = {};
  constructor(private http : HttpClient, private loadCtrl : LoadingController, private toastCtrl: ToastController, private router: Router) {}

  ionViewDidEnter(){
    this.getDataPost();
  }
  
  async getDataPost() {
    // this.http.get("http://jsonplaceholder.typicode.com/posts").subscribe((res : any) => {
    //   console.log(res);
    //   this.dataPOST=res;
    // })

    this.loading = await this.loadPresent();

    this.http.get("https://reqres.in/api/users?page=2").subscribe((res : any) => {
      console.log(res);
      this.dataPOST=res;

      if(this.loading){
        this.loading.dismiss();
      }
    })
  }

  gotoup(){
    this.router.navigate(["/datauploud"]);
  }

  public async loadPresent(): Promise<any>{
    const loading = await this.loadCtrl.create({
      message: "LOADING ... ",
      backdropDismiss: true
    });
    await loading.present();

    return loading;
  }

  submit(){
    this.http.post("http://jsonplaceholder.typicode.com/posts", this.post).subscribe((res:any) => {
      console.log(res);
      this.toastCtrl.create({
        duration: 3000,
        color: "success",
        message: "ID for new Item is " + res.id,
      }).then(l => l.present())
    })
  }
}
