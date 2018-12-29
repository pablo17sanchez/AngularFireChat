import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../provider/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _cs:ChatService) { }

  ngOnInit() {
  }


  ingresar(proveedor:string){

this._cs.login(proveedor);

console.log(proveedor);


  }

}
