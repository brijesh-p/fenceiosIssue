import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geofence } from '@ionic-native/geofence';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(private geofence: Geofence, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


	geofence.initialize().then(
         // resolved promise does not return a value
            () => {

            },
            (err) => alert(err)
        );


        setTimeout(() => {
                            

let fence = {
    id: '69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb', //any unique ID
    latitude:      30.32620000, //center of geofence radius
    longitude:     78.06490000,
    radius:         1000, //radius to edge of geofence in meters
    transitionType: 3, //see 'Transition Types' below
    notification: { //notification settings
        id:             1666, //any unique ID
        title:          'You crossed a fence', //notification title
        text:           'You just arrived to Brijesh center.', //notification body
        openAppOnClick: true //open app when notification is tapped
    }
  };

  this.geofence.addOrUpdate(fence).then(
     () => alert('Geofence added'),
     (err) => alert(err)
   );

this.geofence.onTransitionReceived().subscribe((data) => {
                          alert(JSON.stringify(data));
                      });


}, 10000);

    });
  }
}
