webpackJsonp([1,5],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(172);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllAccountsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllAccountsComponent = (function () {
    function AllAccountsComponent() {
        this.model = {
            name: "",
            favorite: ""
        };
        this.employeeAddressForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            fullName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
                postalCode: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
                country: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
            })
        });
        this.submitted = false;
    }
    AllAccountsComponent.prototype.ngOnInit = function () {
    };
    AllAccountsComponent.prototype.onSubmit = function () {
    };
    AllAccountsComponent.prototype.addNewEmployeeAddress = function () {
        this.employeeAddressForm.reset();
        this.submitted = false;
    };
    AllAccountsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ui-all-accounts',
            template: __webpack_require__(546),
            styles: [__webpack_require__(533)]
        }), 
        __metadata('design:paramtypes', [])
    ], AllAccountsComponent);
    return AllAccountsComponent;
}());
//# sourceMappingURL=all-accounts.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankLoansComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BankLoansComponent = (function () {
    function BankLoansComponent() {
    }
    BankLoansComponent.prototype.ngOnInit = function () {
    };
    BankLoansComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ui-bank-loans',
            template: __webpack_require__(548),
        }), 
        __metadata('design:paramtypes', [])
    ], BankLoansComponent);
    return BankLoansComponent;
}());
//# sourceMappingURL=bank-loans.component.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardsComponent = (function () {
    function CardsComponent() {
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ui-cards',
            template: __webpack_require__(549),
        }), 
        __metadata('design:paramtypes', [])
    ], CardsComponent);
    return CardsComponent;
}());
//# sourceMappingURL=cards.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CashAccountsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CashAccountsComponent = (function () {
    function CashAccountsComponent() {
    }
    CashAccountsComponent.prototype.ngOnInit = function () {
    };
    CashAccountsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ui-cash-accounts',
            template: __webpack_require__(550),
        }), 
        __metadata('design:paramtypes', [])
    ], CashAccountsComponent);
    return CashAccountsComponent;
}());
//# sourceMappingURL=cash-accounts.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestmentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvestmentsComponent = (function () {
    function InvestmentsComponent() {
    }
    InvestmentsComponent.prototype.ngOnInit = function () {
    };
    InvestmentsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ui-investments',
            template: __webpack_require__(551),
        }), 
        __metadata('design:paramtypes', [])
    ], InvestmentsComponent);
    return InvestmentsComponent;
}());
//# sourceMappingURL=investments.component.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendMoneyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SendMoneyComponent = (function () {
    function SendMoneyComponent() {
        /*@ViewChild("wizard") wizard: Wizard;
        open: boolean = true;*/
        this.model = {
            name: "",
            favorite: ""
        };
    }
    SendMoneyComponent.prototype.ngOnInit = function () {
    };
    SendMoneyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ui-send-money',
            template: __webpack_require__(553),
            styles: [__webpack_require__(535)]
        }), 
        __metadata('design:paramtypes', [])
    ], SendMoneyComponent);
    return SendMoneyComponent;
}());
//# sourceMappingURL=send-money.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 348;


/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(476);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.cards = [
            { cardClass: "default-outline", activeLink: "bg-grey bg-hover", routerLink: "allAccounts", cardTitle: "All Accounts", cardBadge: "11", cardText: "9,630,000.00 USD" },
            { cardClass: "info-outline", activeLink: "bg-info bg-hover", routerLink: "cashAccounts", cardTitle: "Cash Accounts", cardBadge: "11", cardText: "9,630,000.00 USD" },
            { cardClass: "warning-outline", activeLink: "bg-warning bg-hover", routerLink: "cards", cardTitle: "Cards", cardBadge: "11", cardText: "9,630,000.00 USD" },
            { cardClass: "purple-outline", activeLink: "bg-purple bg-hover", routerLink: "bankLoans", cardTitle: "Bank Loans", cardBadge: "11", cardText: "9,630,000.00 USD" },
            { cardClass: "success-outline", activeLink: "bg-success bg-hover", routerLink: "investments", cardTitle: "Investments", cardBadge: "11", cardText: "9,630,000.00 USD" },
        ];
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ui-root',
            template: __webpack_require__(547),
            styles: [__webpack_require__(534)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarity_angular__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_clarity_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_clarity_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__all_accounts_all_accounts_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cash_accounts_cash_accounts_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cards_cards_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bank_loans_bank_loans_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__investments_investments_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__send_money_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_archwizard_dist__ = __webpack_require__(542);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__all_accounts_all_accounts_component__["a" /* AllAccountsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__cash_accounts_cash_accounts_component__["a" /* CashAccountsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__cards_cards_component__["a" /* CardsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__bank_loans_bank_loans_component__["a" /* BankLoansComponent */],
                __WEBPACK_IMPORTED_MODULE_11__investments_investments_component__["a" /* InvestmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__send_money_component__["a" /* SendMoneyComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_clarity_angular__["ClarityModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
                // Ng2WizardModule
                __WEBPACK_IMPORTED_MODULE_14_ng2_archwizard_dist__["a" /* WizardModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__all_accounts_all_accounts_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cash_accounts_cash_accounts_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cards_cards_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bank_loans_bank_loans_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__investments_investments_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__send_money_component__ = __webpack_require__(312);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







var APP_ROUTES = [
    { path: '', redirectTo: '/allAccounts', pathMatch: 'full' },
    { path: 'allAccounts', component: __WEBPACK_IMPORTED_MODULE_1__all_accounts_all_accounts_component__["a" /* AllAccountsComponent */] },
    { path: 'cashAccounts', component: __WEBPACK_IMPORTED_MODULE_2__cash_accounts_cash_accounts_component__["a" /* CashAccountsComponent */] },
    { path: 'cards', component: __WEBPACK_IMPORTED_MODULE_3__cards_cards_component__["a" /* CardsComponent */] },
    { path: 'bankLoans', component: __WEBPACK_IMPORTED_MODULE_4__bank_loans_bank_loans_component__["a" /* BankLoansComponent */] },
    { path: 'investments', component: __WEBPACK_IMPORTED_MODULE_5__investments_investments_component__["a" /* InvestmentsComponent */] },
    { path: 'sendMoney', component: __WEBPACK_IMPORTED_MODULE_6__send_money_component__["a" /* SendMoneyComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ui-login',
            template: __webpack_require__(552),
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, ".margin{\n    margin:2%;\n}\n/** input */\ninput[type=text], input[type=password], input[type=number], input[type=email], input[type=url], input[type=tel], input[type=date] {\n    border-radius: 2px;\n    height: 35px;\n    border: 1px solid #9a9a9a;\n}\n.select select {\n    border-radius: 2px;\n    height: 35px;\n    border: 1px solid #9a9a9a;\n}\n.select::after {\n    top: 12px;\n}\n/** modal */\n.modal {\n    overflow-y: scroll;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "a{\n    text-decoration:none;\n}\n.margin{\n    margin:2%;\n}\n/** cards */\n.card-block {\n    height: 65px;\n}\n.card-title {\n    font-size: 15px;\n}\n.info-outline{\n    border-color:#31b0d5;\n    background-color:transparent;\n    color:#31b0d5;\n    box-shadow:0 3px 0 0 #31b0d5;\n}\n.success-outline{\n    border-color:#60b515;\n    background-color:transparent;\n    color:#60b515;\n    box-shadow:0 3px 0 0 #60b515;\n}\n.default-outline{\n    border-color:#999;\n    background-color:transparent;\n    color:#999;\n    box-shadow:0 3px 0 0 #999;\n}\n.warning-outline{\n    border-color:#ec971f;\n    background-color:transparent;\n    color:#ec971f;\n    box-shadow:0 3px 0 0 #ec971f;\n}\n.purple-outline{\n    border-color:#800080;\n    background-color:transparent;\n    color:#800080;\n    box-shadow:0 3px 0 0 #800080;\n}\n.bg-grey{\n    background-color:#999 !important\n}\n.bg-purple{\n    background-color:#800080 !important\n}\n.bg-hover{\n    color:white !important;\n}\n/** labels */\n.label-blue{\n    border:1px solid #004a70;\n}\n.label-green{\n    border:1px solid #266900;\n}\n.label, a.label {\n    padding: 0 8px;\n    border-radius: 15px;\n    height: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, ".horizontal[_nghost-kop-31] ul.steps-indicator[_ngcontent-kop-31] li.current[_ngcontent-kop-31]:after {\n    background-color: #808080;\n}\n.horizontal[_nghost-kop-31] ul.steps-indicator[_ngcontent-kop-31] li[_ngcontent-kop-31]:after {\n    position: absolute;\n    top: -14px;\n    left: calc(50% - 7px);\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    background-color: #E6E6E6;\n    content: '';\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n}\nhorizontal[_nghost-dlc-31] ul.steps-indicator[_ngcontent-dlc-31] li[_ngcontent-dlc-31]:not(:last-child):before {\n    background-color: #E6E6E6;\n    content: '';\n    position: absolute;\n    height: 5px;\n    width: calc(100% - 14px);\n    top: -10px;\n    left: calc(50% + 7px);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports = "<p>\n  all-accounts works!\n</p>\n<button class=\"btn btn-primary\" (click)=\"opened = true\">Send Money</button>\n<clr-modal [(clrModalOpen)]=\"opened\" [clrModalSize]=\"'lg'\">\n  <h3 class=\"modal-title text-center\">Send Money</h3>\n  <div class=\"modal-body\">\n    <wizard>\n      <wizard-step title=\"What\">\n        <form #employeeForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" [hidden]=\"submitted\" [ngClass]=\"'margin'\">\n          <section class=\"form-block\">\n            <div class=\"form-group row\">\n              <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n                <label for=\"to\">To:</label>\n              </div>\n              <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n                <input type=\"text\" id=\"to\" placeholder=\"Enter Some Text\" required name=\"to\" [(ngModel)]=\"model.to\" #toInput=\"ngModel\" size=\"50\"\n                />\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n                <label for=\"from\">From:</label>\n              </div>\n              <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n                <input type=\"text\" id=\"from\" placeholder=\"Enter Some Text\" required name=\"from\" [(ngModel)]=\"model.from\" #fromInput=\"ngModel\"\n                  size=\"50\" />\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n                <label for=\"from\">Amount:</label>\n              </div>\n              <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n                <input type=\"text\" id=\"amount1\" placeholder=\"Enter Some Text\" required name=\"amount1\" [(ngModel)]=\"model.amount1\" #amount1Input=\"ngModel\"\n                  size=\"23\" />\n                <input type=\"text\" id=\"amount2\" placeholder=\"Enter Some Text\" required name=\"amount2\" [(ngModel)]=\"model.amount2\" #amount2Input=\"ngModel\"\n                  size=\"23\" />\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n                <label for=\"desc\">Description for Beneficiary:</label>\n              </div>\n              <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n                <input type=\"text\" id=\"desc\" placeholder=\"Enter Some Text\" required name=\"desc\" [(ngModel)]=\"model.desc\" #descInput=\"ngModel\"\n                  size=\"50\" />\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n              </div>\n              <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"checkbox-inline\">\n                  <input type=\"checkbox\" id=\"othercheckbox\" checked>\n                  <label for=\"othercheckbox\">Use same for myself</label>\n                </div>\n              </div>\n            </div>\n          </section>\n          <button type=\"button\" class=\"btn btn-outline\" (click)=\"opened = false\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-primary\" nextStep [disabled]=\"!employeeForm.valid\">Continue</button>\n        </form>\n      </wizard-step>\n      <wizard-step title=\"When\">\n        <form #employeeForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" [hidden]=\"submitted\" [ngClass]=\"'padding'\">\n          <section class=\"form-block\">\n            <div class=\"form-group row\">\n              <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n                <label for=\"to\">To:</label>\n              </div>\n              <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n                <input type=\"text\" id=\"to\" placeholder=\"Enter Some Text\" required name=\"to\" [(ngModel)]=\"model.to\" #toInput=\"ngModel\" size=\"50\"\n                />\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n                <label for=\"from\">From:</label>\n              </div>\n              <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n                <input type=\"text\" id=\"from\" placeholder=\"Enter Some Text\" required name=\"from\" [(ngModel)]=\"model.from\" #fromInput=\"ngModel\"\n                  size=\"50\" />\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n                <label for=\"from\">Amount:</label>\n              </div>\n              <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n                <input type=\"text\" id=\"amount1\" placeholder=\"Enter Some Text\" required name=\"amount1\" [(ngModel)]=\"model.amount1\" #amount1Input=\"ngModel\"\n                  size=\"23\" />\n                <input type=\"text\" id=\"amount2\" placeholder=\"Enter Some Text\" required name=\"amount2\" [(ngModel)]=\"model.amount2\" #amount2Input=\"ngModel\"\n                  size=\"23\" />\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n                <label for=\"desc\">Description for Beneficiary:</label>\n              </div>\n              <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n                <input type=\"text\" id=\"desc\" placeholder=\"Enter Some Text\" required name=\"desc\" [(ngModel)]=\"model.desc\" #descInput=\"ngModel\"\n                  size=\"50\" />\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n              </div>\n              <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"checkbox-inline\">\n                  <input type=\"checkbox\" id=\"othercheckbox\" checked>\n                  <label for=\"othercheckbox\">Use same for myself</label>\n                </div>\n              </div>\n            </div>\n          </section>\n          <button type=\"button\" class=\"btn btn-outline\" previousStep>Back</button>\n          <button type=\"button\" class=\"btn btn-primary\" nextStep [disabled]=\"!employeeForm.valid\">Next</button>\n        </form>\n      </wizard-step>\n      <wizard-step title=\"Review\">\n        <form #employeeForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" [hidden]=\"submitted\" [ngClass]=\"'padding'\">\n          <section class=\"form-block\">\n            <div class=\"form-group row\">\n              <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n                <label for=\"to\">To:</label>\n              </div>\n              <div class=\"col-lg-8 col-md-12 col-s m-12 col-xs-12\">\n                <input type=\"text\" id=\"to\" placeholder=\"Enter Some Text\" required name=\"to\" [(ngModel)]=\"model.to\" #toInput=\"ngModel\" size=\"50\"\n                />\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n                <label for=\"from\">From:</label>\n              </div>\n              <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n                <input type=\"text\" id=\"from\" placeholder=\"Enter Some Text\" required name=\"from\" [(ngModel)]=\"model.from\" #fromInput=\"ngModel\"\n                  size=\"50\" />\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n                <label for=\"from\">Amount:</label>\n              </div>\n              <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n                <input type=\"text\" id=\"amount1\" placeholder=\"Enter Some Text\" required name=\"amount1\" [(ngModel)]=\"model.amount1\" #amount1Input=\"ngModel\"\n                  size=\"23\" />\n                <input type=\"text\" id=\"amount2\" placeholder=\"Enter Some Text\" required name=\"amount2\" [(ngModel)]=\"model.amount2\" #amount2Input=\"ngModel\"\n                  size=\"23\" />\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n                <label for=\"desc\">Description for Beneficiary:</label>\n              </div>\n              <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n                <input type=\"text\" id=\"desc\" placeholder=\"Enter Some Text\" required name=\"desc\" [(ngModel)]=\"model.desc\" #descInput=\"ngModel\"\n                  size=\"50\" />\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\n              </div>\n              <div class=\"col-lg-8 col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"checkbox-inline\">\n                  <input type=\"checkbox\" id=\"othercheckbox\" checked>\n                  <label for=\"othercheckbox\">Use same for myself</label>\n                </div>\n              </div>\n            </div>\n            <button type=\"button\" class=\"btn btn-outline\" previousStep>Back</button>\n            <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!employeeForm.valid\">Submit</button>\n          </section>\n        </form>\n      </wizard-step>\n    </wizard>\n  </div>\n</clr-modal>"

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <header class=\"header-6\">\n    <div class=\"branding\">\n      <a class=\"nav-link\">\n        <clr-icon shape=\"menu\"></clr-icon>\n        <span class=\"title\">iGTBANK</span>\n      </a>\n    </div>\n    <!--<div class=\"header-nav\"></div>-->\n    <div class=\"header-actions\">\n      <a class=\"nav-link nav-icon\">\n        <clr-icon shape=\"search\"></clr-icon>\n      </a>\n      <a class=\"nav-link nav-icon\">\n        <clr-icon shape=\"shopping-cart\" class=\"has-badge\"></clr-icon>\n      </a>\n      <a class=\"nav-link nav-icon\">\n        <clr-icon shape=\"email\" class=\"has-badge\"></clr-icon>\n      </a>\n      <clr-dropdown class=\"dropdown bottom-right\">\n        <button class=\"nav-text\" clrDropdownToggle>\n              <img src=\"https://www.atomix.com.au/media/2015/06/atomix_user31.png\" width=\"40\" height=\"40\" alt=\"user\">\n                John Doe\n                <clr-icon shape=\"caret down\"></clr-icon>\n            </button>\n        <div class=\"dropdown-menu\">\n          <a clrDropdownItem>Preferences</a>\n          <a clrDropdownItem>Log out</a>\n        </div>\n      </clr-dropdown>\n      <a class=\"nav-link nav-icon\">\n        <clr-icon shape=\"sign-out\"></clr-icon>\n      </a>\n    </div>\n  </header>\n  <nav class=\"subnav\">\n    <ul class=\"nav\">\n      <li class=\"nav-item\">\n        <clr-icon shape=\"cluster\"></clr-icon>\n        <a class=\"nav-link\">Accounts</a>\n      </li>\n    </ul>\n    <a class=\"text-right\">\n      <clr-dropdown class=\"dropdown bottom-right\">\n        <button class=\"nav-text\" clrDropdownToggle>\n                I WANT TO..\n                <clr-icon shape=\"caret down\"></clr-icon>\n            </button>\n        <div class=\"dropdown-menu\">\n          <a clrDropdownItem>Preferences</a>\n          <a clrDropdownItem>Log out</a>\n        </div>\n      </clr-dropdown>\n    </a>\n  </nav>\n  <div [ngClass]=\"'margin'\">\n    <div class=\"content-area\">\n      <div class=\"row\">\n        <div class=\"col-lg-25 col-md-12 col-sm-12 col-xs-12\" *ngFor=\"let card of cards\">\n          <div class=\"card {{card.cardClass}}\" routerLinkActive=\"{{card.activeLink}}\" >\n            <a routerLink=\"{{card.routerLink}}\">\n              <div class=\"card-block\">\n                <h4 class=\"card-title\">\n                  <clr-icon shape=\"cluster\"></clr-icon> {{card.cardTitle}} <span class=\"label\">{{card.cardBadge}}</span></h4>\n              </div>\n              <div class=\"card-footer\">\n                <p class=\"card-text\">{{card.cardText}}</p>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 548:
/***/ (function(module, exports) {

module.exports = "<p>\n  bank-loans works!\n</p>\n"

/***/ }),

/***/ 549:
/***/ (function(module, exports) {

module.exports = "<p>\n  cards works!\n</p>\n"

/***/ }),

/***/ 550:
/***/ (function(module, exports) {

module.exports = "<p>\n  cash-accounts works!\n</p>\n"

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

module.exports = "<p>\n  investments works!\n</p>\n"

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

module.exports = "<wizard>\n  <wizard-step title=\"1\">\n    <div>\n      <form #myForm=\"ngForm\">\n        <section class=\"form-block\">\n          <label>My Form</label>\n          <div class=\"form-group\">\n            <label class=\"required\">Name</label>\n            <label for=\"nameInput\" aria-haspopup=\"true\" role=\"tooltip\" [class.invalid]=\"name.touched && !name.valid\" class=\"tooltip tooltip-validation tooltip-md tooltip-bottom-right\">\n                        <input type=\"text\" id=\"nameInput\" required [(ngModel)]=\"model.name\" name=\"name\" #name=\"ngModel\">\n                        <span class=\"tooltip-content\">\n                          This field cannot be empty!\n                      </span>\n                    </label>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"favInput\">Favorite food</label>\n            <input type=\"text\" id=\"favInput\" [(ngModel)]=\"model.favorite\" name=\"favorite\">\n          </div>\n        </section>\n      </form>\n    </div>\n    <button type=\"button\" nextStep>Next Step</button>\n    <button type=\"button\" goToStep=\"2\">Go directly to third Step</button>\n  </wizard-step>\n  <wizard-step title=\"2\">\n    Content of Step 2\n    <button type=\"button\" previousStep>Go to previous step</button>\n    <button type=\"button\" nextStep>Go to next step</button>\n  </wizard-step>\n  <wizard-step title=\"3\">\n    Content of Step 3\n    <button type=\"button\" previousStep>Previous Step</button>\n    <button type=\"button\">Finish</button>\n  </wizard-step>\n</wizard>"

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(349);


/***/ })

},[571]);
//# sourceMappingURL=main.bundle.js.map