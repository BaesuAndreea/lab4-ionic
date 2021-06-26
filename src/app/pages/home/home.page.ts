import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

  export class HomePage {
    constructor(
        private router: Router, 
        private authSrv: AuthService,
    ){}
    logIn(){
        this.router.navigateByUrl('login')
    }

    logOut() {
      this.authSrv.removeToken();
    }

    expenseList() {
      this.router.navigateByUrl('expenses')
    }

    userLogedIn() {
      return this.authSrv.userLogedIn();
    }
    assignExpenses() {
      this.router.navigateByUrl('userexpenses')
    }
  }