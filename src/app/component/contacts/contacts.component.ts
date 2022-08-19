import { Component, OnInit } from '@angular/core';
import { ContentEntity, HelpsDetailsResponce } from 'src/app/entity/helpdeyailsresponce';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contentEntitys: ContentEntity[] = [];

  constructor(private contactsService:ContactsService) { }

  ngOnInit(): void {
    this.getHelpsDetails();
  }

  getHelpsDetails(){
    this.contactsService.getHelpsDetails()
      .subscribe(res=>{
        this.contentEntitys = res.content;
        console.log(res)
      });
  }
  
  

}
