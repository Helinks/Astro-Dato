import { Component, OnInit, inject } from '@angular/core';
import {  IonButton } from '@ionic/angular';
import { NeoWs } from '../../services/neo-ws';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [IonButton],
})
export class MenuComponent  implements OnInit {
  private neoWs= inject(NeoWs);
  
  opciones = [
    { Actividad: 'Actividad de última misión'},
    { Actividad: 'Crear mi testamento'},
    { Actividad: 'Certificado de días sobrevividos'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
