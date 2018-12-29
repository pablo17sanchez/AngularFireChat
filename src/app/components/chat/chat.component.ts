import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../provider/chat.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {
  mensaje:string="";

  elemento:any;

  constructor(private chtServ:ChatService) { 




    this.chtServ.cargarMensaje().subscribe(()=>{

setTimeout(() => {
  
}, 20);

        this.elemento.scrollTop=this.elemento.scrollHeight;
    });
  }

  ngOnInit() {

    this.elemento= document.getElementById('app-mensajes');


  }


  EnviarMensaje(){

  if(this.mensaje.length==0){

    return;
  }

  else {


    this.chtServ.agergarMensaje(this.mensaje).then(data=>{console.log("mesaje guardado");
  
    this.mensaje="";}).catch(data=>console.error("Error al guardar"));

    
  }
console.log(this.mensaje);

  }

}
