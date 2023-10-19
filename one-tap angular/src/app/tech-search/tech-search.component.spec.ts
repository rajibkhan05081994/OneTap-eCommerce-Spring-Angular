import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSearchComponent } from './tech-search.component';

describe('TechSearchComponent', () => {
  let component: TechSearchComponent;
  let fixture: ComponentFixture<TechSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechSearchComponent]
    });
    fixture = TestBed.createComponent(TechSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
