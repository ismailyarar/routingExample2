import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  accountnumbers = [];
  constructor() {}

  ngOnInit(): void {
    this.accountnumbers = ['A1001', 'A1002'];
  }
}
