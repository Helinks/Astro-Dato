import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { InfoUsuarioComponent } from '../../components/info-usuario/info-usuario.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [IonContent, InfoUsuarioComponent],
})
export class InicioPage {}
