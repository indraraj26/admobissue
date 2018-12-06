import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  input;
  constructor(public navCtrl: NavController) {
    this.input = '1';
  }

  update(){
    this.input += '1'
  }

}
