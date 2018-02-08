import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { pageTwo }from '../pages/pageTwo/pageTwo';
import { thirdpage }from '../pages/thirdpage/thirdpage';
import { settingspage }from '../pages/settingspage/settingspage';
import { gaurdianspage }from '../pages/gaurdianspage/gaurdianspage';
import { Geolocation } from '@ionic-native/geolocation';
import { mapPage}from'../pages/mappage//mappage';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    pageTwo,
    thirdpage,
    settingspage,
    gaurdianspage,
    mapPage,
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    pageTwo,
    thirdpage,
    settingspage,
    gaurdianspage,
    mapPage,
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
