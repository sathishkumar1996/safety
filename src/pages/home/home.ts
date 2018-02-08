import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { pageTwo } from'../pageTwo/pageTwo';
import { thirdpage }from'../thirdpage/thirdpage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public storage: Storage)
   {
 }
  segueToSecondpage() { 
      this.navCtrl.push(pageTwo);
 
}
segueTothirdpage(){
       this.navCtrl.push(thirdpage);
}

}