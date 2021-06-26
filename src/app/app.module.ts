import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './pages/login/login.page';
import { HomePage } from './pages/home/home.page';
import { ExpensesPage } from './pages/expenses/expeses.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideMenuComponent } from './components/side.menu/side.menu.component';
import { ApiService } from './services/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddExpensePage } from './pages/add.expense/add.expense.page';
import { FormsModule } from '@angular/forms';
import { EditExpensePage } from './pages/edit.expense/edit.expense.page';
import { ViewExpensePage } from './pages/view.expense/view.expense.page';
import { TokenInterceptor } from './interceptors/auth.token.interceptors';
import { AuthService } from './services/auth.service';
import { UserExpensesPage } from './pages/user.expenses/user.expenses.list/user.expenses.list';
import { AddUserExpensePage } from './pages/user.expenses/user.expenses.add/user.expenses.add';
import { CommonModule } from '@angular/common';
import { EditUserExpensePage } from './pages/user.expenses/user.expenses.edit/user.expenses.edit';
import { HomePageRoutingModule } from './pages/home/home-routing.module';

@NgModule({
  declarations: 
  [ AppComponent,
    AddExpensePage,
    EditExpensePage,
    ViewExpensePage,
    HomePage, 
    LoginPage,
    ExpensesPage, 
    NavbarComponent,
    SideMenuComponent,
    UserExpensesPage,
    AddUserExpensePage,
    EditUserExpensePage,
   ],
  entryComponents: [],
  imports: [BrowserModule,
    CommonModule,
    HomePageRoutingModule,
     IonicModule.forRoot(), 
     AppRoutingModule, 
     FormsModule,
     HttpClientModule],
  providers: [{ 
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    ApiService,
    AuthService],

  bootstrap: [AppComponent],
})
export class AppModule {}
