import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // 接收数据用
  listData: Object;

  constructor(public navCtrl: NavController, private http: Http,public loadingCtrl: LoadingController) {

  }
  ionViewDidLoad() {
      let loading = this.loadingCtrl.create({
          content: 'Please wait...'
      });

      loading.present();
    // 网络请求
    this.http.request('http://jsonplaceholder.typicode.com/users')
        .subscribe((res: Response) => {
          this.listData = res.json();
            loading.dismiss();
        });
  }
}
