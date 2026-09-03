import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonInput, IonButton } from '@ionic/angular';
import { RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.scss'],
  imports: [IonInput, IonButton, FormsModule],
})
export class InfoUsuarioComponent  implements OnInit {
  nombre: string="";

  constructor(private router: Router) { }

  ngOnInit() {}

  comenzar(){
    this.router.navigate(['/opciones'])
  }
}
