import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { InfoAsteroideComponent } from '../../components/info-asteroide/info-asteroide.component';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, InfoAsteroideComponent, MenuComponent],
})
export class OpcionesPage {}
