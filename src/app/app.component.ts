
import { Component, ViewChild, ElementRef } from '@angular/core';
import * as html2pdf  from 'html2pdf.js';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('firstPage') pageOne: ElementRef;
  @ViewChild('secondPage') PageOne: ElementRef;
  title = 'ResumeBootstrap';

  print(): void {
    const options ={
      filename: 'test.pdf',
      image: {type:'jpeg'},
      html2canvas:{},
      jsPDF: {orientation: 'landscape'}
    };

    const content: Element = document.getElementById('first-page');

    html2pdf()
      .from(content)
      .set(options)
      .save();
  }
}
