import { Component, inject, OnInit, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { NeoWs } from '../../services/neo-ws';
@Component({
  selector: 'app-info-asteroide',
  templateUrl: './info-asteroide.component.html',
  styleUrls: ['./info-asteroide.component.scss'],
  imports: [],
})
export class InfoAsteroideComponent implements OnInit {
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
