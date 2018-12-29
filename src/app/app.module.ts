import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFirestore } from '@angular/fire/firestore';
import { FormsModule } from "@angular/forms";
import { ChatComponent } from './components/chat/chat.component';
import { ChatService } from './provider/chat.service';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    
    ChatComponent,
    
    LoginComponent
  ],
  imports: [
    BrowserModule,
  FormsModule,
  AngularFireModule.initializeApp(environment.firebase),AngularFireStorageModule,AngularFireAuthModule

  ],
  providers: [AngularFirestore,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
