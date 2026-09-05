import { Component, OnInit } from '@angular/core';
import { IonBackButton, IonButton } from '@ionic/angular';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
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

}
