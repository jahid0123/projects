import { Component } from '@angular/core';
import {faUser} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  orders = [
    { date: '2017-01-02 12:04:23', reference: 'ltcbpe', customer: 'Jessie Brown', nbItems: 1, total: 84.58 },
    { date: '2017-01-01 03:32:58', reference: '9i3lee', customer: 'Polly Drake', nbItems: 1, total: 121.96 },
    { date: '2017-01-01 01:32:55', reference: 'icf2v', customer: 'Maria Murphy', nbItems: 6, total: 471.20 }
  ];

  reviews = [
    { customer: 'Billy Smith', product: 'bu-k11b8-R', rating: 3 },
    { customer: 'Edward Perry', product: 'te-gpe6t-B', rating: 2 },
    { customer: 'Wesley Summers', product: 'bu-kp5nb-W', rating: 4 }
  ];

  getStars(rating: number) {
    return Array(rating).fill(0);
  }
}
