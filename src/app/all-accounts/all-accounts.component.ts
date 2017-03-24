import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'ui-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.css']
})
export class AllAccountsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model = {
    name: "",
    favorite: ""
  };

   employeeAddressForm = new FormGroup({
        fullName: new FormControl('', Validators.required),
        address: new FormGroup({
            postalCode: new FormControl('', Validators.required),
            country: new FormControl('', Validators.required)
        })
    });
    submitted = false;
    onSubmit() {
    }
    addNewEmployeeAddress() {
        this.employeeAddressForm.reset();
        this.submitted = false;
    }

}
