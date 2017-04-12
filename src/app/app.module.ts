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
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';
import { TrackComponent } from './track/track.component';
import { FinanceComponent } from './finance/finance.component';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { CustomerComponent } from './customer/customer.component';
import { BusinessComponent } from './business/business.component';
import { PlanComponent } from './plan/plan.component';
import { OptimizeComponent } from './optimize/optimize.component';
import { ContactComponent } from './contact/contact.component';
import { NightModeComponent } from './night-mode/night-mode.component';
import { SettingsComponent } from './settings/settings.component';
import { ApprovalsComponent } from './approvals/approvals.component';

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
    DashboardComponent,
    MenuComponent,
    PaymentComponent,
    TrackComponent,
    FinanceComponent,
    CashFlowComponent,
    CustomerComponent,
    BusinessComponent,
    PlanComponent,
    OptimizeComponent,
    ContactComponent,
    NightModeComponent,
    SettingsComponent,
    ApprovalsComponent,
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
