import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-Two',
  templateUrl: 'pageTwo.html'
})
export class pageTwo {

  constructor(public navCtrl: NavController) {

    function clickAlert() {
      alert("Alert!");
  }
  }}