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
    let bootstrapcss = new String('<link href="assets/print/bootstrap.min.css" rel="stylesheet" type="text/css" media="print">')
    let fontAwsomeCss = new String('<link rel="stylesheet" href="assets/css/all.min.css" media="print">');
    let printDivCSS = new String ('<link href="assets/print/printstyle.css" rel="stylesheet" type="text/css" media="print">');
    this.printDiv('first-page', bootstrapcss, fontAwsomeCss, printDivCSS);

  //   html2pdf()
  //     .from(content)
  //     .set(options)
  //     .save();
   }


   printDiv(divId, bootstrapcss, fontAwsomeCss, printDivCSS): void {
      window.frames["print_frame"].document.querySelector('head').innerHTML=bootstrapcss+fontAwsomeCss+printDivCSS;
      window.frames["print_frame"].document.body.innerHTML= document.getElementById(divId).innerHTML;

      setTimeout(function(){
        window.frames["print_frame"].window.focus();
        window.frames["print_frame"].window.print();
      },1000);
      

      
      //this.Popup(document.getElementById(divId).innerHTML, cssStylesString);
  }


  Popup(data):boolean {
    let cssStylesString: string = "";
    let documentStyle:any = document.styleSheets;
    for(let i = 0;  i< documentStyle.length; i++){
      var rules = documentStyle[i].cssRules || documentStyle[i].rules;
      for(let j = 0; j < rules.length; j++){
        cssStylesString += rules[j].cssText
      }
    }

    var mywindow = window.open('', 'new div', 'height=400,width=600');
    mywindow.document.write('<html><head><title></title>');
    mywindow.document.write('<style type="text/css" />');
    mywindow.document.write(cssStylesString);
    mywindow.document.write('</style></head><body>');
    mywindow.document.write(data);
    mywindow.document.write('</body></html>');
    mywindow.document.close();
    mywindow.focus();
    setTimeout(function(){
      mywindow.print();
    },1000);
    mywindow.close();
  
    return true;
  }
}




