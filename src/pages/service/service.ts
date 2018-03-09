import { Component , ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AlertController, LoadingController, Loading } from 'ionic-angular';
/**
 * Generated class for the ServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google:any;

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {
	
  map: any;
  params={};
  services:any;
  order={};
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

    auth.getService().subscribe(service=>{
      this.services = service["result"];
      console.log(this.services);
    });

    auth.getProvince().subscribe(province=>{
      this.provinces = province["result"];
      console.log(this.provinces);
    });

  	this.params = {
      "logo": "assets/images/logo/login-3.png",
      "register": "Submit",
      "username": "Username",
      "province": "Province",
      "regency": "Regency",
      "district":"District",
      "village":"Village",
      "password": "Password",
      "email": "Email",
      "service":"service",
      "button": "submit",
      "skip": "Skip"
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
  }

  getRegency(){
    console.log("province",this.order["province"]);
    this.auth.getRegency(this.order["province"]).subscribe(regency=>{
      this.regencies = regency["result"];
      console.log(this.regencies);
    });
  }

  getDistrict(){
    console.log("regency",this.order["regency"]);
    this.auth.getDistrict(this.order["regency"]).subscribe(district=>{
      this.districts = district["result"];
      console.log(district);
    });
  }

  getVillage(){
    this.auth.getVillage(this.order["district"]).subscribe(village=>{
      this.villages = village["result"];
      console.log(village);
    });
  }

  onOrder(){
    console.log(this.order);
    this.showLoading("Please Wait");

    this.auth.onOrder(this.order).subscribe(result=>{
        if(result['success'] == true){
          this.showAlert("Success","Your Order Has Been Sent");
          console.log(result);
          this.navCtrl.push('MenuPage');
        } else {
          console.log(result);
          this.showAlert("Error",result["result"]["message"]);
        }
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
