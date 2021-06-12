import { TYPES } from './../../models/expense.model';
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Expense } from "src/app/models/expense.model";
import { ApiService } from 'src/app/services/api.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
    selector: 'app-view-expense',
    templateUrl: 'view.expense.page.html',
  })
  export class ViewExpensePage {
    TYPES = TYPES;

    expense = new Expense();
    
    constructor(private route: ActivatedRoute,
        private apiSvc: ApiService,
        private navCtrl: NavController,
    private alertCtrl: AlertController,
    private router: Router
        ){}

    ionViewWillEnter() {
        this.route.queryParams.subscribe(params => {
            this.expense = params["expense"];
        });
    }

   
    
      backToExpenses() {
        this.navCtrl.pop();
      }
  }