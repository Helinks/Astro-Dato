import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonInput, IonButton, IonIcon } from '@ionic/angular';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { planetOutline, arrowForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.scss'],
  imports: [IonInput, IonButton, IonIcon, FormsModule],
})
export class InfoUsuarioComponent {
  nombre = '';

  constructor(private router: Router) {
    addIcons({ planetOutline, arrowForwardOutline });
  }

  comenzar() {
    this.router.navigate(['/opciones']);
  }
}
