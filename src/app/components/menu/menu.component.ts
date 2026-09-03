import { Component, OnInit } from '@angular/core';
import { IonBackButton, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [IonBackButton, IonButton],
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
