import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AlertController, LoadingController, Loading } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  params:any={};
  credential={};
  provinces:any;
  regencies:any;
  districts:any;
  villages:any;
  loading:Loading;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth:AuthServiceProvider,
    private alertCtrl:AlertController,
    private loadingCtrl:LoadingController) {

    this.showLoading("please wait");
    auth.getProvince().subscribe(province=>{
      this.provinces = province["result"];
      console.log(this.provinces);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  onRegister(){
    console.log(this.credential);
    this.showLoading("Sedang mendaftar...");
    this.auth.registerTechnician(this.credential).subscribe(result=>{
      console.log(result);
      this.showAlert("Berhasil","Pendaftaran Selesai");
      this.navCtrl.push('LoginPage');
    },error=>{
      this.showAlert("Gagal","Periksa kembali formulir isian anda");
    });
  }

  getRegency(){
    console.log("province",this.credential["province"]);
    this.showLoading("please wait");
    this.auth.getRegency(this.credential["province"]).subscribe(regency=>{
      this.regencies = regency["result"];
      console.log(this.regencies);
      this.loading.dismiss();
    });
  }

  getDistrict(){
    console.log("regency",this.credential["regency"]);
    this.showLoading("please wait");
    this.auth.getDistrict(this.credential["regency"]).subscribe(district=>{
      this.districts = district["result"];
      console.log(district);
      this.loading.dismiss();
    });
  }

  getVillage(){
    this.showLoading("please wait");
    this.auth.getVillage(this.credential["district"]).subscribe(village=>{
      this.villages = village["result"];
      console.log(village);
      this.loading.dismiss();
    });
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
