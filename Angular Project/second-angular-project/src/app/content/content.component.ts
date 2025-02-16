import { Component } from '@angular/core';
import { ListContentComponent } from "../list-content/list-content.component";

@Component({
  selector: 'app-content',
  imports: [ListContentComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
