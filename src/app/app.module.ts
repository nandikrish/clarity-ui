import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AllAccountsComponent } from './all-accounts/all-accounts.component';
import { CashAccountsComponent } from './cash-accounts/cash-accounts.component';
import { CardsComponent } from './cards/cards.component';
import { BankLoansComponent } from './bank-loans/bank-loans.component';
import { InvestmentsComponent } from './investments/investments.component';
import { LoginComponent } from './login/login.component';
import { SendMoneyComponent } from './send-money.component';
// import { Ng2WizardModule } from 'ng2-wizard';
import {WizardModule} from "ng2-archwizard/dist";

@NgModule({
  declarations: [
    AppComponent,
    AllAccountsComponent,
    CashAccountsComponent,
    CardsComponent,
    BankLoansComponent,
    InvestmentsComponent,
    LoginComponent,
    SendMoneyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule.forRoot(),
    routing,
    // Ng2WizardModule
    WizardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
