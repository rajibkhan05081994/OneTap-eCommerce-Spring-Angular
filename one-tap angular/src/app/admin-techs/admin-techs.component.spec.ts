import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTechsComponent } from './admin-techs.component';

describe('AdminTechsComponent', () => {
  let component: AdminTechsComponent;
  let fixture: ComponentFixture<AdminTechsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTechsComponent]
    });
    fixture = TestBed.createComponent(AdminTechsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
