import { Component } from '@angular/core';

@Component({
  selector: 'ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  expanded: boolean = false;
}
  // rootDirectory: any[] = [
  //   {
  //     name: "Dashboard",
  //     icon: "dashboard",
  //     expanded: false,
  //     linkUrl:"dashboard"
  //   },
  //   {
  //     name: "Payment Center",
  //     icon: "folder",
  //     expanded: false,
  //     linkUrl:"cashAccounts"
  //   },
  //   {
  //     name: "Track",
  //     icon: "folder",
  //     expanded: false,
  //     linkUrl:"cards"
  //   },
  //   {
  //     name: "Analyze",
  //     icon: "bar-chart",
  //     expanded: false,
  //     active:false,
  //     files: [
  //       {
  //         icon: "image",
  //         name: "Accounts",
  //         linkUrl:"allAccounts"
  //       },
  //       {
  //         icon: "image",
  //         name: "Financial Analysis",
  //         linkUrl:"bankLoans"
  //       },
  //       {
  //         icon: "image",
  //         name: "Cash Flow",
  //         linkUrl:"investments"
  //       },
  //       {
  //         icon: "image",
  //         name: "Customer Insights",
  //         linkUrl:"allAccounts"
  //       },
  //       {
  //         icon: "image",
  //         name: "Business Benchmark",
  //         linkUrl:"investments"
  //       },
  //     ]
  //   },
  //   {
  //     name: "Plan",
  //     icon: "folder",
  //     expanded: false,
  //     linkUrl:"bankLoans"
  //   },
  //   {
  //     name: "Optimize",
  //     icon: "folder",
  //     expanded: false,
  //     linkUrl:"cards"
  //   },
  //   {
  //     name: "Contact Book",
  //     icon: "folder",
  //     expanded: false,
  //     linkUrl:"bankLoans"
  //   },
  // ];