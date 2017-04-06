import { Component, OnInit, ViewChild } from '@angular/core';
import {Wizard} from "clarity-angular";

@Component({
  selector: 'ui-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.sass']
})
export class SendMoneyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild("wizard") wizard: Wizard;
  open: boolean = true;

  model = {
    name: "",
    favorite: ""
  };

  onCommit(): void {
    alert("wizard finish");
  }
}
