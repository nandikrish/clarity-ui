import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AllAccountsComponent } from './all-accounts/all-accounts.component';
import { CashAccountsComponent } from './cash-accounts/cash-accounts.component';
import { CardsComponent } from './cards/cards.component';
import { BankLoansComponent } from './bank-loans/bank-loans.component';
import { InvestmentsComponent } from './investments/investments.component';
import { SendMoneyComponent } from './send-money.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { ApprovalsComponent } from './approvals/approvals.component';
import { SettingsComponent } from './settings/settings.component';

const APP_ROUTES: Routes=[
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path:'dashboard', component:DashboardComponent},
    {path:'allAccounts', component:AllAccountsComponent},
    {path:'cashAccounts', component:CashAccountsComponent},
    {path:'cards', component:CardsComponent},
    {path:'bankLoans', component:BankLoansComponent},
    {path:'investments', component:InvestmentsComponent},
    {path:'payment', component:PaymentComponent},    
    {path:'track', component:TrackComponent},    
    {path:'finance', component:FinanceComponent},    
    {path:'cashFlow', component:CashFlowComponent},    
    {path:'customer', component:CustomerComponent},    
    {path:'business', component:BusinessComponent},    
    {path:'plan', component:PlanComponent},    
    {path:'optimize', component:OptimizeComponent},    
    {path:'contact', component:ContactComponent},    
    {path:'nightMode', component:NightModeComponent},    
    {path:'approvals', component:ApprovalsComponent},    
    {path:'settings', component:SettingsComponent},    
]

export const routing = RouterModule.forRoot(APP_ROUTES);