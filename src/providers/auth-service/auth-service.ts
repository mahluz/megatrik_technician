import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { AuthHttp, AuthConfig, JwtHelper } from 'angular2-jwt';
import { Storage } from '@ionic/storage';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

	url:string = "http://localhost/megatrix_server/public/";
	session:any={};

  constructor(
  	public http: HttpClient,
  	public storage: Storage
  	) {
    console.log('Hello AuthServiceProvider Provider');
  }

  public getUserInfo(){

    this.storage.get('token').then(token=>{
      let access = {token:token};

      this.http.post(this.url+'api/user',access).subscribe(user=>{
        this.session.user = user["result"]; // fill data to variable
        return user;
      });

    });
  }

  public login(credentials){
  	return Observable.create(observer=>{

  		this.http.post(this.url+"api/auth/login",credentials).subscribe(result=>{

  			if(result["response"] == "success"){
  				this.storage.set('token',result["result"]["token"]);
  				observer.next(true);
  				observer.complete();
  			} else {
  				observer.next(false);
  				observer.complete();
  			}

  		},error=>{
  			console.log("error login",error);
        observer.next(error);
        observer.complete();  
  		});

  	});
  }

  public logout(){
		this.storage.remove('token');
		return Observable.create(observer=>{
			this.session.user = null;
			observer.next(true);
			observer.complete();
		});
	}

  public getService(){
    return Observable.create(observer=>{
      this.storage.get('token').then(token=>{
        this.http.post(this.url+"api/getService",{token:token}).subscribe(result=>{
          observer.next(result);
          observer.complete();
        },error=>{
          observer.next(error);
          observer.complete();
        });
      });
    });
  }

  public getProvince(){
    return Observable.create(observer=>{
      this.storage.get('token').then(token=>{
        this.http.post(this.url+"api/getProvince",{token:token}).subscribe(result=>{
          observer.next(result);
          observer.complete();
        },error=>{
          observer.next(error);
          observer.complete();
        });
      });
    });
  }

  public getRegency(province){
    return Observable.create(observer=>{
      this.storage.get('token').then(token=>{
        let access = {
          token:token,
          province:province
        };
        this.http.post(this.url+"api/getRegency",access).subscribe(result=>{
          observer.next(result);
          observer.complete();
        },error=>{
          observer.next(error);
          observer.complete();
        });
      });
    });
  }

  public getDistrict(regency){
    return Observable.create(observer=>{
      this.storage.get('token').then(token=>{
        let access = {
          token:token,
          regency:regency
        };
        this.http.post(this.url+"api/getDistrict",access).subscribe(result=>{
          observer.next(result);
          observer.complete();
        },error=>{
          observer.next(error);
          observer.complete();
        });
      });
    });
  }

  public getVillage(district){
    return Observable.create(observer=>{
      this.storage.get('token').then(token=>{
        let access = {
          token:token,
          district:district
        };
        this.http.post(this.url+"api/getVillage",access).subscribe(result=>{
          observer.next(result);
          observer.complete();
        },error=>{
          observer.next(error);
          observer.complete();
        });
      });
    });
  }

  public onOrder(order){
    return Observable.create(observer=>{
      this.storage.get('token').then(token=>{
        let access = {
          token:token,
          order:order,
          user:this.session.user
        };
        this.http.post(this.url+"api/onOrder",access).subscribe(result=>{
          observer.next({success:true,result:result});
          observer.complete();
        },error=>{
          observer.next({success:false,result:error});
          observer.complete();
        });
      });
    });
  }

  public getOrder(){
    return Observable.create(observer=>{
      this.storage.get('token').then(token=>{
        let access = {
          token:token,
          user:this.session.user
        };
        this.http.post(this.url+"api/getOrder",access).subscribe(result=>{
          observer.next({success:true,result:result});
          observer.complete();
        },error=>{
          observer.next({success:false,result:error});
          observer.complete();
        });
      });
    });
  }

  public completeOrder(order){
    return Observable.create(observer=>{
      this.storage.get('token').then(token=>{
        let access = {
          token:token,
          order:order
        }
        this.http.post(this.url+"api/completeOrder",access).subscribe(result=>{
          observer.next({success:true,result:result});
          observer.complete();
        },error=>{
          observer.next({success:false,result:error});
          observer.complete();
        });
      });
    });
  }

  public getNearOrder(){
  	return Observable.create(observer=>{
  		this.storage.get('token').then(token=>{
  			let access = {
  				token:token,
  				user:this.session.user
  			}
  			this.http.post(this.url+"api/getNearOrder",access).subscribe(result=>{
  				observer.next({success:true,result:result});
  				observer.complete();
  			},error=>{
  				observer.next({success:false,result:error});
  				observer.complete();
  			});
  		});
  	});
  }

  public setTechnician(order){
  	return Observable.create(observer=>{
  		this.storage.get('token').then(token=>{
  			let access = {
  				token:token,
  				user:this.session.user,
  				order:order
  			};
  			this.http.post(this.url+"api/setTechnician",access).subscribe(result=>{
  				observer.next({success:true,result:result});
  				observer.complete();
  			},error=>{
  				observer.next({success:false,result:error});
  				observer.complete();
  			});
  		});
  	});
  }

  public getOrderMaterial(order){
  	return Observable.create(observer=>{
  		this.storage.get('token').then(token=>{
  			let access = {
  				token:token,
  				order:order
  			};
  			this.http.post(this.url+"api/getOrderMaterial",access).subscribe(result=>{
  				observer.next({success:true,result:result});
  				observer.complete();
  			},error=>{
  				observer.next({success:false,result:error});
  				observer.complete();
  			});
  		});
  	});
  }

  public addMaterial(order,material){
  	return Observable.create(observer=>{
  		this.storage.get('token').then(token=>{
  			let access = {
  				token:token,
  				order:order,
  				material:material
  			};
  			this.http.post(this.url+"api/addMaterial",access).subscribe(result=>{
  				observer.next({success:true,result:result});
  				observer.complete();
  			},error=>{
  				observer.next({success:false,result:error});
  				observer.complete();
  			});
  		});
  	});
  }

  public getMaterial(){
  	return Observable.create(observer=>{
  		this.storage.get('token').then(token=>{
  			let access = {
  				token:token
  			};
  			this.http.post(this.url+"api/getMaterial",access).subscribe(result=>{
  				observer.next({success:true,result:result});
  				observer.complete();
  			},error=>{
  				observer.next({success:false,result:error});
  				observer.complete();
  			});
  		});
  	});
  }

  public removeOrderMaterial(orderMaterial_id){
  	return Observable.create(observer=>{
  		this.storage.get('token').then(token=>{
  			let access = {
  				token:token,
  				orderMaterial:orderMaterial_id
  			};
  			this.http.post(this.url+"api/removeOrderMaterial",access).subscribe(result=>{
  				observer.next({success:true,result:result});
  				observer.complete();
  			},error=>{
  				observer.next({success:false,result:error});
  				observer.complete();
  			});
  		});
  	});
  }

  public registerTechnician(credential){
     return Observable.create(observer=>{
       this.storage.get('token').then(token=>{
         let access = {
           token:token,
           credential:credential
         };
         this.http.post(this.url+"api/registerTechnician",access).subscribe(result=>{
           observer.next({success:true,result:result});
           observer.complete()
         },error=>{
           observer.next({success:false,result:error});
           observer.complete();
         });
       });  
     });
  }

  public getCurrentJobTechnician(){
    return Observable.create(observer=>{
      this.storage.get('token').then(token=>{
        let access = {
          token:token,
          technician:this.session.user
        };
        this.http.post(this.url+"api/getCurrentJobTechnician",access).subscribe(result=>{
           observer.next({success:true,result:result});
           observer.complete()
         },error=>{
           observer.next({success:false,result:error});
           observer.complete();
         });
      });
    });
  }

}
