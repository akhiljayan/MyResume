import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as html2pdf  from 'html2pdf.js';

@Component({
  selector: 'show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.css']
})
export class ShowPageComponent implements OnInit {

  @ViewChild('firstPage') pageOne: ElementRef;
  @ViewChild('secondPage') PageOne: ElementRef;
  title = 'ResumeBootstrap';


  ngOnInit(): void {
  }

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
