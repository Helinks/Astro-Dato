import { Component, OnInit } from '@angular/core';
import { MenuComponent}  from '../menu/menu.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-info-asteroide',
  templateUrl: './info-asteroide.component.html',
  styleUrls: ['./info-asteroide.component.scss'],
  imports: [MenuComponent, NgIf],
})
export class InfoAsteroideComponent implements OnInit {

  asteroide = {
    nombre: 'Apophis'
  };

  constructor() {}

  ngOnInit() {}

}