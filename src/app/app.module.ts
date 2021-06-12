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
import { HttpClientModule } from '@angular/common/http';
import { AddExpensePage } from './pages/add.expense/add.expense.page';
import { FormsModule } from '@angular/forms';
import { EditExpensePage } from './pages/edit.expense/edit.expense.page';
import { ViewExpensePage } from './pages/view.expense/view.expense.page';

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
   ],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule, 
     FormsModule,
     HttpClientModule],
  providers: [{ 
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy },
    ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
