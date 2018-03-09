import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AlertController, LoadingController, Loading } from 'ionic-angular';
/**
 * Generated class for the ManageMaterialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-material',
  templateUrl: 'manage-material.html',
})
export class ManageMaterialPage {
	order:any;
	orderMaterials:any;
	materials:any;
	material:any;
	loading:Loading;
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public auth:AuthServiceProvider,
  	public alertCtrl:AlertController,
    public loadingCtrl:LoadingController) {
  	this.order = navParams.get('order');

  	auth.getOrderMaterial(this.order).subscribe(result=>{
  		console.log(result);
  		this.orderMaterials = result["result"];
  	});

  	auth.getMaterial().subscribe(result=>{
  		this.materials = result["result"]["result"];
  		console.log(this.materials);
  	});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageMaterialPage');
    console.log(this.order);
  }

  debug(){
  	this.auth.getOrderMaterial(this.order).subscribe(result=>{
  		console.log(result);
  		this.orderMaterials = result["result"];
  	});
  	console.log("debug",this.order,this.orderMaterials,this.materials,this.material);
  }

  addMaterial(){
  	this.showLoading("please wait");
  	this.auth.addMaterial(this.order,this.material).subscribe(result=>{
  		console.log(result);
  		this.showAlert("Success",'Material sudah ditambahkan');

  		this.auth.getOrderMaterial(this.order).subscribe(result=>{
	  		console.log(result);
	  		this.orderMaterials = result["result"];
	  	});
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

  removeOrderMaterial(orderMaterial_id){
  	this.showLoading("please wait");
  	this.auth.removeOrderMaterial(orderMaterial_id).subscribe(result=>{
  		console.log(result);
  		this.showAlert("Success",'Material sudah dihapus');
  		this.auth.getOrderMaterial(this.order).subscribe(result=>{
	  		console.log(result);
	  		this.orderMaterials = result["result"];
	  	});
  	});
  }

}
