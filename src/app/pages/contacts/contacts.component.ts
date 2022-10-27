import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/models/models';
import { ContactsServiceService } from 'src/app/services/contacts-service.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactList: ContactModel[] = [];
  constructor(private contactService: ContactsServiceService) { }

  ngOnInit(): void {
    this.contactList = this.contactService.getContacts();
  }

}
