import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact/contact.model';
import { OneService } from '../one.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private detailService: OneService){
    
  }
  ngOnInit(): void {
    this.detailContact = this.detailService.listerContact();
  }
  detailContact!: Contact[];
}
