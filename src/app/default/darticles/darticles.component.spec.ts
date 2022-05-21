import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarticlesComponent } from './darticles.component';

describe('DarticlesComponent', () => {
  let component: DarticlesComponent;
  let fixture: ComponentFixture<DarticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
