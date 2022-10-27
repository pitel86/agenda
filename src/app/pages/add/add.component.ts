import { ContactModel } from './../../models/models';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactsServiceService } from 'src/app/services/contacts-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  
  newContactForm!: FormGroup;
  submitted: boolean = false;
  constructor(private form:FormBuilder, private contactService: ContactsServiceService, private router:Router) {
    
   }

  ngOnInit(): void {
    this.newContactForm = this.form.group({
      name: [this.contactService.contact.name, [Validators.required, Validators.minLength(3)]],
      surname: [this.contactService.contact.surname, [Validators.required, Validators.minLength(3)]],
      email: [this.contactService.contact.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: [this.contactService.contact.phone, [Validators.required, Validators.pattern("^(\\+34|0034|34)?[6789]\\d{8}$")]]
    });
  }

  onSubmit(){
    this.submitted = true;
    if(this.newContactForm.valid){
      const contact: ContactModel = {
        id: 0,
        name: this.newContactForm.get('name')?.value,
        surname: this.newContactForm.get('surname')?.value,
        email: this.newContactForm.get('email')?.value,
        phone: this.newContactForm.get('phone')?.value
      }
      
      this.contactService.addContact(contact);


      this.newContactForm.reset();
      this.submitted = false

      this.router.navigate(['/contacts']);
    }


  }

}
