import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Expense } from 'src/app/models/expense.model';
import { ApiService } from 'src/app/services/api.service';
@Component({
    selector: 'app-expenses',
    templateUrl: 'expenses.page.html',
    styleUrls: ['expenses.page.scss'],
    encapsulation: ViewEncapsulation.None,
  })
  export class ExpensesPage {
     expenses:Array<Expense>;

     constructor(private apiSvc: ApiService,
         private router: Router,
         private navCtrl: NavController,
         private alertCtrl: AlertController) {}
  ionViewWillEnter() {
    this.loadExpenses();
  }

  goToAddExpense() {
    this.router.navigateByUrl('expenses/add');
  }

  deleteExpense(expense: Expense) {
    this.apiSvc.delete(`api/Expenses/${expense.id}`).subscribe(() => {
      this.loadExpenses();
    });
  }



  editExpense(expense: Expense) {
    let navigationExtras: NavigationExtras = {
        queryParams: {
            expense: expense
        }
    };
      this.navCtrl.navigateForward('expenses/edit', navigationExtras);
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
    this.apiSvc.get('api/Expenses').subscribe((response: Array<Expense>) => {
      this.expenses = response;
    });
  }
  }