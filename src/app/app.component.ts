import { Component } from '@angular/core';

@Component({
  selector: 'ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cards=[
    {cardClass:"default-outline", activeLink:"bg-grey bg-hover", routerLink:"allAccounts", cardTitle:"All Accounts", cardBadge:"11", cardText:"9,630,000.00 USD"},
    {cardClass:"info-outline", activeLink:"bg-info bg-hover", routerLink:"cashAccounts", cardTitle:"Cash Accounts", cardBadge:"11", cardText:"9,630,000.00 USD"},
    {cardClass:"warning-outline", activeLink:"bg-warning bg-hover", routerLink:"cards", cardTitle:"Cards", cardBadge:"11", cardText:"9,630,000.00 USD"},
    {cardClass:"purple-outline", activeLink:"bg-purple bg-hover", routerLink:"bankLoans", cardTitle:"Bank Loans", cardBadge:"11", cardText:"9,630,000.00 USD"},
    {cardClass:"success-outline", activeLink:"bg-success bg-hover", routerLink:"investments", cardTitle:"Investments", cardBadge:"11", cardText:"9,630,000.00 USD"},
  ];

  rootDirectory: any[] = [
        {
            name: "Dashboard",
            icon: "dashboard",
            expanded: false,
        },
        {
            name: "Payment Center",
            icon: "folder",
            expanded: false,
        },
        {
            name: "Track",
            icon: "folder",
            expanded: false,
        },
        {
            name: "Analyze",
            icon: "bar-chart",
            expanded: false,
            files: [
                {
                    icon: "image",
                    name: "Accounts",
                },
                {
                    icon: "image",
                    name: "Financial Analysis",
                },
                {
                    icon: "image",
                    name: "Cash Flow",
                },
                {
                    icon: "image",
                    name: "Customer Insights",
                },
                {
                    icon: "image",
                    name: "Business Benchmark",
                },
            ]
        },
        {
            name: "Plan",
            icon: "folder",
            expanded: false,
        },
        {
            name: "Optimize",
            icon: "folder",
            expanded: false,
        },
        {
            name: "Contact Book",
            icon: "folder",
            expanded: false,
        },
    ];
    
    openFile(directoryName: string, fileName: string) {
    }
}
