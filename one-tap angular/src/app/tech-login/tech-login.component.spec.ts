import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLoginComponent } from './tech-login.component';

describe('TechLoginComponent', () => {
  let component: TechLoginComponent;
  let fixture: ComponentFixture<TechLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechLoginComponent]
    });
    fixture = TestBed.createComponent(TechLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
