import { Component, ViewEncapsulation } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { AlertController, NavController } from "@ionic/angular";
import { Expense } from "src/app/models/expense.model";
import { UserExpense } from "src/app/models/user.expenses.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-user-expenses',
    templateUrl: 'user.expenses.list.html',
    encapsulation: ViewEncapsulation.None,
  })
  export class UserExpensesPage {
     expenses:Array<UserExpense>;

     constructor(private apiSvc: ApiService,
         private router: Router,
         private navCtrl: NavController,
         private alertCtrl: AlertController) {}
  ionViewWillEnter() {
    this.loadExpenses();
  }

  goToAddExpense() {
    this.router.navigateByUrl('userexpenses/add');
  }

  deleteExpense(expense: UserExpense) {
      console.log(expense);
    this.apiSvc.delete(`api/UsersExpenses/${expense.id}`).subscribe(() => {
      this.loadExpenses();
    });
  }



  editExpense(expense: UserExpense) {
    let navigationExtras: NavigationExtras = {
        queryParams: {
            expense: expense
        }
    };
      this.navCtrl.navigateForward('userexpenses/edit', navigationExtras);
    }

   viewExpenses(expense: Expense) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                expense: expense
            }
        };
          this.navCtrl.navigateForward('expenses/view', navigationExtras);
        }

  private loadExpenses() {
    this.apiSvc.get('api/UsersExpenses').subscribe((response: Array<UserExpense>) => {
      this.expenses = response;
      console.log(this.expenses);
      console.log(response);
    });
  }
  }