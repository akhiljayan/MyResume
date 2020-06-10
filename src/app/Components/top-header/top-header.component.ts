import { Component, OnInit } from '@angular/core';
import { IResumeHeader } from '../../AllDataObjects/AllInterface';
import { HeaderDetail } from '../../AllDataObjects/DataFile';

@Component({
  selector: 'top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  headerDetail : IResumeHeader;
  constructor() { 
    this.headerDetail = new HeaderDetail().getData();
  }

  ngOnInit(): void {
  }

}
