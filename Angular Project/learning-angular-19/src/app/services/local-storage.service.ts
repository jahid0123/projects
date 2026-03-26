import { Injectable } from '@angular/core';
import { Loan } from '../components/model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

 private key = 'loans';

  saveLoan(loan: Loan) {
    const loans = this.getLoans();
    loans.push(loan);
    localStorage.setItem(this.key, JSON.stringify(loans));
  }

  getLoans(): Loan[] {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  deleteLoan(index: number) {
    const loans = this.getLoans();
    loans.splice(index, 1);
    localStorage.setItem(this.key, JSON.stringify(loans));
  }
}
