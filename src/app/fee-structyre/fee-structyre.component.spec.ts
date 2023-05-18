import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeStructyreComponent } from './fee-structyre.component';

describe('FeeStructyreComponent', () => {
  let component: FeeStructyreComponent;
  let fixture: ComponentFixture<FeeStructyreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeStructyreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeStructyreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
