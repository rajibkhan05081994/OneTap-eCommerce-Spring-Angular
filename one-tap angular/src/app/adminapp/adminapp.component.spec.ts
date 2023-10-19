import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminappComponent } from './adminapp.component';

describe('AdminappComponent', () => {
  let component: AdminappComponent;
  let fixture: ComponentFixture<AdminappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminappComponent]
    });
    fixture = TestBed.createComponent(AdminappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
