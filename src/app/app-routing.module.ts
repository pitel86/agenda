import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule)
  },
  {
    path: 'addContact', loadChildren: () => import("./pages/add/add.module").then(m => m.AddModule)
  },
  {
    path: 'contacts', loadChildren: () => import("./pages/contacts/contacts.module").then(m => m.ContactsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
