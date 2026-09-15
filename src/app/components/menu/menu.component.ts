<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { IonBackButton, IonButton } from '@ionic/angular';
import { NgFor } from '@angular/common';

=======
import { Component, OnInit, inject } from '@angular/core';
import {  IonButton } from '@ionic/angular';
import { NeoWs } from '../../services/neo-ws';
>>>>>>> origin/main
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
<<<<<<< HEAD
  imports: [IonBackButton, IonButton, NgFor],}
)
export class MenuComponent  implements OnInit {

  opciones = [
    'Actividad de última misión',
    'Crear mi testamento',
    'Certificado de días sobrevividos'
  ];

  constructor() { }
  ngOnInit() {}
=======
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
>>>>>>> origin/main

}
