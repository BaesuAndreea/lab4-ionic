import { Component } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";
import { Expense } from "src/app/models/expense.model";
import { UserExpense } from "src/app/models/user.expenses.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-add-user-expense',
    templateUrl: 'user.expenses.add.html',
  })
  export class AddUserExpensePage {
  
    expenses:Array<Expense>;
    expense:UserExpense = new UserExpense(); 
  
    constructor(
      private apiSvc: ApiService,
      private navCtrl: NavController,
      private alertCtrl: AlertController
    ) {}
    ionViewWillEnter() {
        this.loadExpenses();
      }
      private loadExpenses() {
        this.apiSvc.get('api/Expenses').subscribe((response: Array<Expense>) => {
          this.expenses = response;
          console.log(this.expenses);
        });
      }

    addExpense() {  
      this.apiSvc.post('api/UsersExpenses', this.expense).subscribe(
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