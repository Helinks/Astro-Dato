import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { InfoAsteroideComponent } from '../../components/info-asteroide/info-asteroide.component';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, InfoAsteroideComponent, MenuComponent]
})
export class OpcionesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
