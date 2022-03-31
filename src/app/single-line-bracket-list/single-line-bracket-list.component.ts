import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[single-line-bracket-list]',
  templateUrl: './single-line-bracket-list.component.html',
  styleUrls: ['./single-line-bracket-list.component.css']
})
export class SingleLineBracketListComponent implements OnInit {

  @Input('listItems') listItems: Array<string>;
  @Input('title') title: string;
  constructor() { 
    console.log(this.listItems);
  }

  ngOnInit(): void {
  }

}
