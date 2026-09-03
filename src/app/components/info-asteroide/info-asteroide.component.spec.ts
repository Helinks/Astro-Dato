import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAsteroideComponent } from './info-asteroide.component';

describe('InfoAsteroideComponent', () => {
  let component: InfoAsteroideComponent;
  let fixture: ComponentFixture<InfoAsteroideComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAsteroideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
