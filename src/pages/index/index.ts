import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AppConfig } from './../../app/app.config';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  constructor(public navCtrl:NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }
  logEvent(event,index:number,navParams) {
    //console.log(event);
    let tabIndex=this.navCtrl.getByIndex(index);
    AppConfig.setTitle(navParams.name);
    this.navCtrl.parent.select(index);
    //this.navCtrl.push(HomePage,navParams);
  }
}
