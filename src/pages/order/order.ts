import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AlertController, LoadingController, Loading } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
	
  params:any={};
  loading:Loading;
  orders:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public auth:AuthServiceProvider,
    public alertCtrl:AlertController,
    public loadingCtrl:LoadingController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {

    auth.getNearOrder().subscribe(result=>{
      this.orders = result["result"];
      console.log(this.orders);

      this.params.data = this.orders;

       this.params.events = {
            'onLike': function (item: any) {
                  console.log("Like");
            },
            'onFavorite': function (item: any) {
                item.favorite = !item.favorite;
                console.log("Favorite");
            },
            'onShare': function (item: any) {
                  console.log("Share",auth.session);
            },
            'onFab': function (item: any) {
                  // console.log(item);
                  auth.getCurrentJobTechnician().subscribe(result=>{
                     console.log(result);
                     if(item["technician"]["order"] != null){
                        let actionSheet = actionSheetCtrl.create({
                          title: 'Manage Material',
                          buttons: [
                            {
                              text: 'Manage Material',
                              role: 'destructive',
                              handler: () => {
                                console.log('add material clicked');
                                let order = {order:result["result"]["result"]["order"]};
                                navCtrl.push("ManageMaterialPage",order);
                              }
                            },{
                              text: 'Cancel',
                              role: 'cancel',
                              handler: () => {
                                console.log('Cancel clicked');
                              }
                            }
                          ]
                        });
                        actionSheet.present();
                      } else {
                        let toast = toastCtrl.create({
                          message: 'You dont have any job',
                          duration: 3000
                        });
                        toast.present();
                      }
                  });
            },
            'onRates': function (index: number) {
                  console.log("Rates " + (index + 1));
            },
            'onItemClick': function (item: any) {
                  console.log(item["client"]["biodata"]["home_address"]);
                  let actionSheet = actionSheetCtrl.create({
                    title: 'Alamat: '+item["client"]["biodata"]["home_address"],
                    buttons: [
                      {
                        text: 'Ambil order',
                        role: 'destructive',
                        handler: () => {
                          console.log('ambil order clicked',item);
                          auth.setTechnician(item["id"]).subscribe(result=>{
                            if(result["success"] == true){
                              if(result["result"]["result"] != "error"){
                                console.log(result);
                                let alert = alertCtrl.create({
                                  title:"Success",
                                  subTitle:"Try to reach client address, and solve client problem, thank you",
                                  buttons:['OK']
                                });

                                alert.present();
                                navCtrl.setRoot(navCtrl.getActive().component);
                              } else {
                                let alert = alertCtrl.create({
                                  title:"error",
                                  subTitle:"You already have a Job, try to clear first",
                                  buttons:['OK']
                                });

                                alert.present();

                              }
                            } else {
                              console.log("error",result);
                            }
                          });
                        }
                      },{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                          console.log('Cancel clicked');
                        }
                      }
                    ]
                  });
                  actionSheet.present();          
            },
        };

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
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

  refresh(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component); 
  }

}
