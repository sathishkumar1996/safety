import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { pageTwo }from '../pages/pageTwo/pageTwo';
import { thirdpage }from '../pages/thirdpage/thirdpage';
import { settingspage }from '../pages/settingspage/settingspage';
import { gaurdianspage }from '../pages/gaurdianspage/gaurdianspage';
import {mapPage}from'../pages/mappage/mappage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
