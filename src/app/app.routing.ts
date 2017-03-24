import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AllAccountsComponent } from './all-accounts/all-accounts.component';
import { CashAccountsComponent } from './cash-accounts/cash-accounts.component';
import { CardsComponent } from './cards/cards.component';
import { BankLoansComponent } from './bank-loans/bank-loans.component';
import { InvestmentsComponent } from './investments/investments.component';
import { SendMoneyComponent } from './send-money.component';

const APP_ROUTES: Routes=[
    {path: '', redirectTo: '/allAccounts', pathMatch: 'full'},
    {path:'allAccounts', component:AllAccountsComponent},
    {path:'cashAccounts', component:CashAccountsComponent},
    {path:'cards', component:CardsComponent},
    {path:'bankLoans', component:BankLoansComponent},
    {path:'investments', component:InvestmentsComponent},
    {path:'sendMoney', component:SendMoneyComponent},
]

export const routing = RouterModule.forRoot(APP_ROUTES);