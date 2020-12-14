import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  showServices = false;
  services = ['Deposit Money', 'Open FD', 'Mail Customer Care'];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.showServices = queryParams['accttype'] === 's' ? true : false;
    });
  }
}
