import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EncontreOMedicamento4Page } from '../encontre-omedicamento4/encontre-omedicamento4';
import { EncontreOMedicamento5Page } from '../encontre-omedicamento5/encontre-omedicamento5';

@Component({
  selector: 'page-encontre-omedicamento2',
  templateUrl: 'encontre-omedicamento2.html'
})
export class EncontreOMedicamento2Page {

  constructor(public navCtrl: NavController) {
  }
  goToEncontreOMedicamento4(params){
    if (!params) params = {};
    this.navCtrl.push(EncontreOMedicamento4Page);
  }goToEncontreOMedicamento5(params){
    if (!params) params = {};
    this.navCtrl.push(EncontreOMedicamento5Page);
  }goToEncontreOMedicamento2(params){
    if (!params) params = {};
    this.navCtrl.push(EncontreOMedicamento2Page);
  }
}
