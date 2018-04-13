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
            content: '正在加载...'
        });

        loading.present();
        // 网络请求
        this.listData = [{name: '北京靠谱科技有限公司上市计划', email: '管理员  04-13 14:51',img:'card-amsterdam.png',icon:'Browser-Icon.png',slide:'slide1.jpeg'},
            {name: '100家老字号企业集体亮相', email: '管理员  04-13 14:51',img:'card-madison.png',icon:'Clock.png',slide:'slide2.jpeg'},
            {name: '大数据解决方案实施', email: '管理员  04-13 14:51',img:'card-saopaolo.png',icon:'user.png',slide:'slide3.jpeg'},
            {name: '抗战胜利70周年纪念日', email: '管理员  04-13 14:51',img:'card-sf.png',icon:'Key.png',slide:'slide4.jpeg'},
            {name: '北京靠谱科技有限公司', email: '管理员  04-13 14:51',img:'card-amsterdam.png',icon:'Gear.png',slide:'slide5.jpeg'},
            {name: '100家老字号企业集体亮相', email: '管理员  04-13 14:51',img:'card-madison.png',icon:'Clock.png',slide:'slide4.jpeg'},
            {name: '大数据解决方案实施', email: '管理员  04-13 14:51',img:'card-saopaolo.png',icon:'Cloud.png',slide:'slide2.jpeg'},
            {name: '抗战胜利70周年纪念日', email: '管理员  04-13 14:51',img:'card-sf.png',icon:'Code-Window.png',slide:'slide2.jpeg'},
            {name: '北京靠谱科技有限公司', email: '管理员  04-13 14:51',img:'card-amsterdam.png',icon:'Contract.png',slide:'slide4.jpeg'},
            {name: '100家老字号企业集体亮相', email: '管理员  04-13 14:51',img:'card-madison.png',icon:'Desk.png',slide:'slide2.jpeg'},
            {name: '大数据解决方案实施', email: '管理员  04-13 14:51',img:'card-saopaolo.png',icon:'Desktop.png',slide:'slide4.jpeg'},
            {name: '抗战胜利70周年纪念日', email: '管理员  04-13 14:51',img:'card-sf.png',icon:'Documents.png',slide:'slide2.jpeg'},
            {name: '北京靠谱科技有限公司', email: '管理员  04-13 14:51',img:'card-amsterdam.png',icon:'Drawing-Tablet.png',slide:'slide4.jpeg'},
            {name: '100家老字号企业集体亮相', email: '管理员  04-13 14:51',img:'card-madison.png',icon:'Envelope.png',slide:'slide2.jpeg'},
            {name: '大数据解决方案实施', email: '管理员  04-13 14:51',img:'card-saopaolo.png',icon:'Eye.png',slide:'slide4.jpeg'},
            {name: '抗战胜利70周年纪念日', email: '管理员  04-13 14:51',img:'card-sf.png',icon:'Gear.png',slide:'slide2.jpeg'}];

        this.http.request('http://jsonplaceholder.typicode.com/users')
            .subscribe((res: Response) => {

                //this.listData = res.json();

                loading.dismiss();
            },error=>{

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
