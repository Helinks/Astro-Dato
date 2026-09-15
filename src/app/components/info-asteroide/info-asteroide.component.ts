<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { MenuComponent}  from '../menu/menu.component';
import { NgIf } from '@angular/common';

=======
import { Component, inject, OnInit, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { NeoWs } from '../../services/neo-ws';
>>>>>>> origin/main
@Component({
  selector: 'app-info-asteroide',
  templateUrl: './info-asteroide.component.html',
  styleUrls: ['./info-asteroide.component.scss'],
  imports: [MenuComponent, NgIf],
})
export class InfoAsteroideComponent implements OnInit {
<<<<<<< HEAD

  asteroide = {
    nombre: 'Apophis'
  };

  constructor() {}

  ngOnInit() {}

}
=======
  private neoWs = inject(NeoWs);

  asteroideCerca:any = null;
  loading = signal(true);
  error = signal(false);

  ngOnInit() {
    this.neoWs.getDatos().subscribe({
        next: (asteroide) => {
          this.asteroideCerca = asteroide; 
          this.loading.set(false)},
        error: (err) => {
          console.error('Error al llamar a los datos: ', err);
          this.loading.set(false)
          this.error.set(true);
        },
      });
  }
}
>>>>>>> origin/main
