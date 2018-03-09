import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
	params:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  about(){
  	this.navCtrl.push('AboutPage');
  }

  help(){
  	this.navCtrl.push('HelpPage');
  }

  material(){
  	this.navCtrl.push('MaterialPage');
  }

  service(){
    this.navCtrl.push('ServicePage');
  }

}
