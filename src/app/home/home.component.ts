import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userId = 'UID0023';
  //Ana sayfadan acoounts componente gitmek için bir düğme sağlayacaz,
  //bu rota navigasyonu programlı olarak yapılacaktır
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateToAccount() {
    this.router.navigate(['/account']);
    // this.router.navigateByUrl('/account');
  }
}
