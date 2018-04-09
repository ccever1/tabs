import {Component} from '@angular/core';
import {NavController, LoadingController, NavParams} from 'ionic-angular';
import {Http, Response} from '@angular/http';
import {AppConfig} from './../../app/app.config';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    // 接收数据用
    listData: Object;
    public title = '';

    constructor(public navCtrl: NavController, private http: Http, public loadingCtrl: LoadingController) {

    }

    ionViewDidLoad() {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        // 网络请求
        this.http.request('http://jsonplaceholder.typicode.com/users')
            .subscribe((res: Response) => {

                //this.listData = res.json();
                this.listData = [{name: '北京纽伦科技有限公司', email: '阅读人数:141',img:'card-amsterdam.png',icon:'Battery.png'},
                    {name: '100家老字号企业集体亮相', email: '阅读人数:3021',img:'card-madison.png',icon:'Briefcase.png'},
                    {name: '大数据解决方案实施', email: '阅读人数:41',img:'card-saopaolo.png',icon:'Browser-Icon.png'},
                    {name: '抗战胜利70周年纪念日', email: '阅读人数:3',img:'card-sf.png',icon:'Browser-Testing.png'},
                    {name: '北京纽伦科技有限公司', email: '阅读人数:141',img:'card-amsterdam.png',icon:'Camera.png'},
                    {name: '100家老字号企业集体亮相', email: '阅读人数:3021',img:'card-madison.png',icon:'Clock.png'},
                    {name: '大数据解决方案实施', email: '阅读人数:41',img:'card-saopaolo.png',icon:'Cloud.png'},
                    {name: '抗战胜利70周年纪念日', email: '阅读人数:3',img:'card-sf.png',icon:'Code-Window.png'},
                    {name: '北京纽伦科技有限公司', email: '阅读人数:141',img:'card-amsterdam.png',icon:'Contract.png'},
                    {name: '100家老字号企业集体亮相', email: '阅读人数:3021',img:'card-madison.png',icon:'Desk.png'},
                    {name: '大数据解决方案实施', email: '阅读人数:41',img:'card-saopaolo.png',icon:'Desktop.png'},
                    {name: '抗战胜利70周年纪念日', email: '阅读人数:3',img:'card-sf.png',icon:'Documents.png'},
                    {name: '北京纽伦科技有限公司', email: '阅读人数:141',img:'card-amsterdam.png',icon:'Drawing-Tablet.png'},
                    {name: '100家老字号企业集体亮相', email: '阅读人数:3021',img:'card-madison.png',icon:'Envelope.png'},
                    {name: '大数据解决方案实施', email: '阅读人数:41',img:'card-saopaolo.png',icon:'Eye.png'},
                    {name: '抗战胜利70周年纪念日', email: '阅读人数:3',img:'card-sf.png',icon:'Gear.png'}];
                loading.dismiss();
            });
    }

    ionViewDidEnter() {
        if (AppConfig.getTitle()) {
            this.title = AppConfig.getTitle();
            AppConfig.setTitle('');
        } else {
            this.title = '资讯';
        }
        console.log('ionViewDidEnter HomePage');
    }
}
