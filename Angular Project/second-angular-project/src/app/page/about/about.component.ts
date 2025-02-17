import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
 // Reference the textarea and output div elements using ViewChild
 @ViewChild('inputTextarea') inputTextarea!: ElementRef;
 @ViewChild('outputDiv') outputDiv!: ElementRef;

 showOutput(): void {
   // Get the textarea value using ViewChild
   const inputText: string = this.inputTextarea.nativeElement.value;

   // Set the value inside the output div
   this.outputDiv.nativeElement.innerText = inputText;
 }
}


