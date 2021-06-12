
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: 'side.menu.component.html',
})
export class SideMenuComponent {
  constructor( private navCtrl: NavController) {}
  logOut() {
   
    this.navCtrl.navigateRoot('');
  }
}
