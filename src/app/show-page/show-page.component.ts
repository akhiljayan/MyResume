import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

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
    let bootstrapcss = new String('<link href="assets/print/bootstrap.min.css" rel="stylesheet" type="text/css" media="print">')
    let fontAwsomeCss = new String('<link rel="stylesheet" href="assets/css/all.min.css" media="print">');
    let print1DivCSS = new String ('<link href="assets/print/printstyle_page1.css" rel="stylesheet" type="text/css" media="print">');
    let print2DivCSS = new String ('<link href="assets/print/printstyle_page2.css" rel="stylesheet" type="text/css" media="print">');
    this.printDiv('first-page', 'second-page', bootstrapcss, fontAwsomeCss, print1DivCSS, print2DivCSS);
   }


   printDiv(firstPage, secondPage, bootstrapcss, fontAwsomeCss, print1DivCSS, print2DivCSS): void {
      window.frames["print_frame_1"].document.querySelector('head').innerHTML=bootstrapcss + fontAwsomeCss + print1DivCSS;
      window.frames["print_frame_1"].document.body.innerHTML= document.getElementById(firstPage).innerHTML;

      window.frames["print_frame_2"].document.querySelector('head').innerHTML=bootstrapcss + fontAwsomeCss + print2DivCSS;
      window.frames["print_frame_2"].document.body.innerHTML= document.getElementById(secondPage).innerHTML;

      
      setTimeout(function(){
        window.frames["print_frame_1"].window.focus();
        window.frames["print_frame_1"].window.print();
      },1000);


      setTimeout(function(){
        window.frames["print_frame_2"].window.focus();
        window.frames["print_frame_2"].window.print();
      },1000);


      // this.Popup(firstPage, window.frames["print_frame_1"].document);
  }


  Popup(firstPage, documentData):void {
    debugger;
    let cssStylesString: string = "";
    let documentStyle:any = documentData.styleSheets;
    for(let i = 0;  i< documentStyle.length; i++){
      var rules = documentStyle[i].cssRules || documentStyle[i].rules;
      for(let j = 0; j < rules.length; j++){
        cssStylesString += rules[j].cssText
      }
    }

    var mywindow = window.frames["print_frame_2"];
    mywindow.document.write('<html><head><title></title>');
    mywindow.document.write('<style type="text/css" />');
    mywindow.document.write(cssStylesString);
    mywindow.document.write('</style></head><body>');
    mywindow.document.write(document.getElementById(firstPage).innerHTML);
    mywindow.document.write('</body></html>');
    mywindow.document.close();
    mywindow.focus();
    
    var doc = new jsPDF();

    doc.fromHTML(mywindow.document.innerHTML);
    doc.output("dataurlnewwindow.pdf");
  }
}




