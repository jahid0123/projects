import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ContentComponent } from "./content/content.component";
import { ListContentComponent } from "./list-content/list-content.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ContentComponent, ListContentComponent],
  // templateUrl: './app.component.html',
  template: `
  <div class="container">
  <app-header></app-header>
  <app-content>
  
  </app-content>
  <app-footer></app-footer>
  </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jahid Ahmed Second Project';
}
