import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  params:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params.data = {
        "iconLike": "icon-thumb-up",
        "iconFavorite": "icon-heart",
        "iconShare": "icon-share-variant",
        "title": "Megatrik",
        "titleDescription": "Solusi Permasalahan Listrik Rumah Anda",
        "contentTitle": "About us",
        "contentDescription": "Permasalahan listrik di rumah ataupun gedung terkadang membuat kita repot. Untuk itu kami hadir untuk membantu Anda dalam menangani problem kelistrik yang ada di tempat Anda. Mulai dari masalah ringan hingga berat",
        "iconLoacation": "icon-map-marker-radius",
        "iconLoacationText": "Semarang,Indonesia",
        "iconWatch": "icon-alarm",
        "iconWatchText": "8:00 to 16:00 working days",
        "iconPhone": "icon-phone",
        "iconPhoneText": "333 222 111",
        "iconEarth": "icon-earth",
        "iconEarthText": "www.megatrik.com",
        "iconEmail": "icon-email-outline",
        "iconEmailText": "dev@csform.com",
        "titleMap": "Here we are :",
        "map": {
            "lat": -6.989626,
            "lng": 110.427706,
            "zoom": 15,
            "mapTypeControl": true,
            "streetViewControl": true
        }
    };
    this.params.events = {
        'onLike': function (item: any) {
            console.log("Like");
        },
        'onFavorite': function (item: any) {
              item.favorite = !item.favorite;
            console.log("Favorite");
        },
        'onShare': function (item: any) {
            console.log("Share");
        },
    };

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
