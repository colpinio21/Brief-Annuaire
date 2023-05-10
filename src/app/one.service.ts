import { Injectable } from '@angular/core';
import { Contact } from './contact/contact.model';

@Injectable({
  providedIn: 'root'
})
export class OneService {

  listeContacts: Contact[] = [
    {
    id : 0,
    nom: "Contact 1",
    prenom:"Contact 1",
    adresse: "adresse",
    photo:"",
    client:true
    },
    {
      id : 1,
      nom: "Contact 2",
      prenom:"Contact 2",
      adresse: "adresse",
      photo:"",
      client:true
    },
    {
      id : 1,
      nom: "Contact 2",
      prenom:"Contact 2",
      adresse: "adresse",
      photo:"",
      client:true
    }
  ]

  listerContact () {
    return this.listeContacts
  }
  detaillerContact (){
    return this.listeContacts
  }
}
