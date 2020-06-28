import { Component, OnInit } from '@angular/core';
import { Involvements } from 'src/app/AllDataObjects/DataFile';
import { IInvolvements } from 'src/app/AllDataObjects/AllInterface';

@Component({
  selector: 'involvements',
  templateUrl: './involvements.component.html',
  styleUrls: ['./involvements.component.css']
})
export class InvolvementsComponent implements OnInit {
  involvements: IInvolvements;
  constructor() {
    this.involvements = new Involvements().getData();
  }

  ngOnInit(): void {
  }

}
