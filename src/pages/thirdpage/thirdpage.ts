import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { settingspage }from '../settingspage/settingspage';
import{ gaurdianspage }from '../gaurdianspage/gaurdianspage';
import {mapPage}from'../mappage/mappage';

@Component({
  selector: 'page-third',
  templateUrl: 'thirdpage.html'
})
export class thirdpage {

  constructor(public navCtrl: NavController){
  }
  segueTogaurdianspage(){
     this.navCtrl.push(gaurdianspage);
   }
segueTosettingspage(){
      this.navCtrl.push(settingspage);

} 
segueTomappage()
{
  this.navCtrl.push(mapPage);
}

}


