import { Expense, TYPES } from './../../models/expense.model';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-expense',
  templateUrl: 'add.expense.page.html',
})
export class AddExpensePage {
 TYPES = TYPES;

  expense = new Expense();

  constructor(
    private apiSvc: ApiService,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}
  addExpense() {
      
    this.apiSvc.post('api/Expenses', this.expense).subscribe(
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
  }

  backToExpenses() {
    this.navCtrl.pop();
  }
}
