import { TYPES } from './../../models/expense.model';
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Expense } from "src/app/models/expense.model";
import { ApiService } from 'src/app/services/api.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
    selector: 'app-edit-expense',
    templateUrl: 'edit.expense.page.html',
  })
  export class EditExpensePage {
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

    editExpense() {
      
        this.apiSvc.put('api/Expenses/'+ this.expense.id, this.expense).subscribe(
          () => {
            this.navCtrl.pop();
          },
          (err) => {
            let message = 'Validation error';
            const errorsArray = err?.error?.errors;
            if (errorsArray) {
              message = Object.values(errorsArray)[0] as string;
            }
            this.alertCtrl
              .create({
                header: 'Error',
                message: message,
                buttons: ['Ok'],
              })
              .then((al) => al.present());
          }
        );

        this.router.navigateByUrl('expenses');
      }
    
      backToExpenses() {
        this.navCtrl.pop();
      }
  }