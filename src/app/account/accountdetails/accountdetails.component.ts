import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css'],
})
export class AccountdetailsComponent implements OnInit {
  acctNo: string;
  account: { accountnumber: string; type: string; balance: number };
  constructor(private route: ActivatedRoute, private router: Router) {}

  accountDetails = [
    {
      accountnumber: 'A1001',
      type: 'Saving',
      balance: 22000,
    },
    {
      accountnumber: 'A1002',
      type: 'Checking',
      balance: 1000,
    },
  ];

  ngOnInit(): void {
    // this.acctNo = this.route.snapshot.params['accountno'];
    this.route.params.subscribe(
      (params: Params) => (this.acctNo = params['accountno'])
    );
    this.account = this.accountDetails.find(
      (e) => e.accountnumber === this.acctNo
    );
  }
  // onSelectedAccount(acct) {
  //   this.router.navigate(['/service'], {
  //     queryParams: { accttype: acct.type === 'Saving' ? 's' : 'c' },
  //   });
  // }
}
