import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddExpensePage } from './pages/add.expense/add.expense.page';
import { EditExpensePage } from './pages/edit.expense/edit.expense.page';
import { ExpensesPage } from './pages/expenses/expeses.page';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
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
