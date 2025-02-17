import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  // template: `
  // <div class="container">
  // <app-header></app-header>
  // <app-navbar></app-navbar>
  // <app-content></app-content>
  // <app-footer></app-footer>
  // </div>
  // `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jahid Ahmed Second Project';
}
