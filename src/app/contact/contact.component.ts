import { Component, Input} from '@angular/core';
import { OneService } from '../one.service';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @Input() item !: Contact;

  
}

