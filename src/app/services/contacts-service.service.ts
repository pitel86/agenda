import { Injectable } from '@angular/core';
import { ContactModel } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ContactsServiceService {
  public contactList: ContactModel[];
  contact: ContactModel  = {
    id: 0,
    name: "asdasd",
    surname: "asdasd",
    email: "adasdsad",
    phone: "adsda"
  }
  constructor() {
    this.contactList = [
      {
        id: 1,
        name: "Pepe",
        surname: "Perez",
        email: "pepe@perez.com",
        phone: "900900900"
      },{
        id: 2,
        name: "Juan",
        surname: "Ramirez",
        email: "juan@ramirez.com",
        phone: "900900901"
      }
    ]
  }

  getContacts(): ContactModel[] {
    return this.contactList;
  }

  getContactById(id: number): ContactModel {
    const filteredContacts = this.contactList.filter((contact) => contact.id == id)
    return filteredContacts[0];
  }

  addContact(contact: ContactModel): void {
    contact.id = this.contactList.length > 0 ? this.contactList[this.contactList.length - 1].id + 1 : 1;
    this.contactList = [...this.contactList, contact];
  }
}
