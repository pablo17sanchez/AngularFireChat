import { Injectable } from '@angular/core';

import {  AngularFirestore,AngularFirestoreCollection} from "@angular/fire/firestore";
import { IMensaje } from '../interface/mensaje.interface';
import { from } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemDoc:AngularFirestoreCollection<IMensaje>
public chats:IMensaje[]=[];

public usuario:any={}  ;


  constructor(private afs:AngularFirestore,public afAuth:AngularFireAuth) { 


this.afAuth.authState.subscribe(user=>{

console.log('Estado del usuario',user);

if(!user){

  return;
}

this.usuario.nombre= user.displayName;
this.usuario.uid=user.uid;



});



  }

  cargarMensaje(){

this.itemDoc=this.afs.collection<IMensaje>('chats',ref=>ref.orderBy('fecha','asc'));

return   this.itemDoc.valueChanges().pipe(map((mensajes:IMensaje[])=>{
  this.chats= [];
  
  
for(let mensaje of mensajes){


this.chats.unshift(mensaje);

}
return this.chats;


}));



  }
login(proveedor:string){


    this.afAuth.auth.signInWithPopup(new  auth.GoogleAuthProvider());

}

logout(){
this.usuario={};
  this.afAuth.auth.signOut();
}


  agergarMensaje(texto:string){
//TODO : add uid to post

    let mensaje:IMensaje={
nombre:'Demo',
mensaje:texto,
fecha:new Date().getTime()


    }
return this.itemDoc.add(mensaje);


  }
}
