import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import {  Observable } from "rxjs";
import { ChatService } from './provider/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firechat';

  public items:Observable<any[]>;
    constructor(db: AngularFirestore,public _cs:ChatService) {

      this.items=db.collection('chats').valueChanges();
  
    }
}
