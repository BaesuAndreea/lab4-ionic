
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Expense } from "src/app/models/expense.model";
import { ApiService } from 'src/app/services/api.service';
import { AlertController, NavController } from '@ionic/angular';
import { UserExpense } from "src/app/models/user.expenses.model";

@Component({
    selector: 'app-edit-user-expense',
    templateUrl: 'user.expenses.edit.html',
  })
  export class EditUserExpensePage {

    expense = new UserExpense();
    expenses:Array<Expense>;
    
    constructor(private route: ActivatedRoute,
        private apiSvc: ApiService,
        private navCtrl: NavController,
    private alertCtrl: AlertController,
    private router: Router
        ){}

    
    ionViewWillEnter() {
        this.route.queryParams.subscribe(params => {
            this.expense = params["expense"];
            console.log(this.expense);
        });
        this.loadExpenses();
    }
      private loadExpenses() {
        this.apiSvc.get('api/Expenses').subscribe((response: Array<Expense>) => {
          this.expenses = response;
          console.log(this.expenses);
        });
      }
    editExpense() {
      
        this.apiSvc.put('api/UsersExpenses/'+ this.expense.id, this.expense).subscribe(
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

        //this.router.navigateByUrl('userexpenses');
      }
    
      backToExpenses() {
        this.navCtrl.pop();
      }
  }