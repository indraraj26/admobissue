import { HomePage } from './../home/home';
import { AdmobProvider } from './../../providers/admob/admob';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import "rxjs/add/operator/switchmap";
import { fromPromise } from 'rxjs/observable/fromPromise';


@IonicPage()
@Component({
  selector: 'page-blank',
  templateUrl: 'blank.html',
})
export class BlankPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public admob:AdmobProvider) {
  }

  ionViewCanEnter(){

    fromPromise(this.admob.showInterstitialAd()).
    switchMap(x => x)
    .subscribe(y => this.navCtrl.setRoot(HomePage))
    
    return false;
  }

}
