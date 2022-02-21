import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalistaChamadosComponent } from './analista-chamados.component';

describe('AnalistaChamadosComponent', () => {
  let component: AnalistaChamadosComponent;
  let fixture: ComponentFixture<AnalistaChamadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalistaChamadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalistaChamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
