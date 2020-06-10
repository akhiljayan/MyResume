import { Component, OnInit } from '@angular/core';
import { IContacts } from '../../AllDataObjects/AllInterface';
import { ContactDetails } from '../../AllDataObjects/DataFile';

@Component({
  selector: '[contacts]',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactDetails : IContacts;
  constructor() { 
    this.contactDetails = new ContactDetails().getData();
  }

  ngOnInit(): void {
  }

}
