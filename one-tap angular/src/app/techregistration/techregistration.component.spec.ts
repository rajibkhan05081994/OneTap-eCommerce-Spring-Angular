import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechregistrationComponent } from './techregistration.component';

describe('TechregistrationComponent', () => {
  let component: TechregistrationComponent;
  let fixture: ComponentFixture<TechregistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechregistrationComponent]
    });
    fixture = TestBed.createComponent(TechregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
