import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AlertController, LoadingController, Loading } from 'ionic-angular';

/**
 * Generated class for the MaterialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-material',
  templateUrl: 'material.html',
})
export class MaterialPage {
    
    params:any={};
    materials:any;
    loading:Loading;

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public auth:AuthServiceProvider,
      public alertCtrl:AlertController,
      public loadingCtrl:LoadingController) {

      this.showLoading("please wait");
      auth.getMaterial().subscribe(result=>{
          this.materials = result["result"]["result"];
          console.log(this.materials);
      });

      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialPage');
  }

  showLoading(text){
    this.loading = this.loadingCtrl.create({
      content: text,
      dismissOnPageChange:true
    });

    this.loading.present();
  }

  showAlert(title,text){
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title:title,
      subTitle:text,
      buttons:['OK']
    });

    alert.present();
  }

}
