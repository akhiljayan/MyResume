import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[bracket-list]',
  templateUrl: './bracket-list.component.html',
  styleUrls: ['./bracket-list.component.css']
})
export class BracketListComponent implements OnInit {

  @Input('listItems') listItems: Array<string>;
  @Input('isTwoRow') isTwoRow: boolean;
  @Input('isVerticalTop') isVerticalTop: boolean;
  @Input('title') title: string;
  constructor() { 
    console.log(this.listItems);
    console.log(this.isTwoRow);
  }

  ngOnInit(): void {
  }

}
