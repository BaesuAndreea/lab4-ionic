import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddExpensePage } from './pages/add.expense/add.expense.page';
import { EditExpensePage } from './pages/edit.expense/edit.expense.page';
import { ExpensesPage } from './pages/expenses/expeses.page';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { AddUserExpensePage } from './pages/user.expenses/user.expenses.add/user.expenses.add';
import { EditUserExpensePage } from './pages/user.expenses/user.expenses.edit/user.expenses.edit';
import { UserExpensesPage } from './pages/user.expenses/user.expenses.list/user.expenses.list';
import { ViewExpensePage } from './pages/view.expense/view.expense.page';
const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'expenses',
    component: ExpensesPage,
  },
  {
    path: 'expenses/add',
    component: AddExpensePage,
  },
  {
    path: 'expenses/edit',
    component: EditExpensePage,
  },
  {
    path: 'expenses/view',
    component: ViewExpensePage,
  },
  {
    path: 'userexpenses',
    component: UserExpensesPage,
  },
  {
    path: 'userexpenses/add',
    component: AddUserExpensePage,
  },
  {
    path: 'userexpenses/edit',
    component: EditUserExpensePage,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
