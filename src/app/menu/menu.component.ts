import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private _router: Router, private location: Location) { }

  rootMenu: any[] = [
    {
      name: "Dashboard",
      icon: "dashboard",
      expanded: false,
      linkUrl: "dashboard"
    },
    {
      name: "Payment Center",
      icon: "folder",
      expanded: false,
      linkUrl: "payment"
    },
    {
      name: "Track",
      icon: "folder",
      expanded: false,
      files: [
        {
          icon: "folder",
          name: "Accounts",
          linkUrl: "track"
        },
        {
          icon: "folder",
          name: "Cash",
          linkUrl: "cashAccounts"
        },
      ]
    },
    {
      name: "Analyze",
      icon: "bar-chart",
      expanded: false,
      files: [
        {
          icon: "image",
          name: "Accounts",
          linkUrl: "allAccounts"
        },
        {
          icon: "image",
          name: "Financial Analysis",
          linkUrl: "finance"
        },
        {
          icon: "image",
          name: "Cash Flow",
          linkUrl: "cashFlow"
        },
        {
          icon: "image",
          name: "Customer Insights",
          linkUrl: "customer"
        },
        {
          icon: "image",
          name: "Business Benchmark",
          linkUrl: "business"
        },
      ]
    },
    {
      name: "Plan",
      icon: "folder",
      expanded: false,
      files:[
        {
          icon:"folder",
          name:"Loan Plans",
          linkUrl:"plan"
        },
        {
          icon:"folder",
          name:"Investments",
          linkUrl:"investments"
        }
      ]
    },
    {
      name: "Optimize",
      icon: "folder",
      expanded: false,
      files:[
        {
          icon:"folder",
          name:"Optimize Accounts",
          linkUrl:"optimize"
        }
      ]
    },
    {
      name: "Contact Book",
      icon: "folder",
      expanded: false,
      linkUrl: "contact"
    },
  ];

  rootDivider: any[] = [
    {
      name: "Night Mode",
      icon: "settings",
    },
    {
      name: "Settings",
      icon: "settings",
    },
    {
      name: "Approvals",
      icon: "settings",
    },
  ];

  onExpand(menu) {
    if (menu.files) {
      menu.expanded = !menu.expanded;
    } else {
      this._router.navigate([menu.linkUrl]);
    }
  }

  isRouteActive(path) {
    return this.location.path().indexOf(path) > -1;
  }
}