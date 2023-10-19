import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnitiansComponent } from './technitians.component';

describe('TechnitiansComponent', () => {
  let component: TechnitiansComponent;
  let fixture: ComponentFixture<TechnitiansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnitiansComponent]
    });
    fixture = TestBed.createComponent(TechnitiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
