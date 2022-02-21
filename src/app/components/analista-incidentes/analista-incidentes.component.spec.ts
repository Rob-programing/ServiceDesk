import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalistaIncidentesComponent } from './analista-incidentes.component';

describe('AnalistaIncidentesComponent', () => {
  let component: AnalistaIncidentesComponent;
  let fixture: ComponentFixture<AnalistaIncidentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalistaIncidentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalistaIncidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
