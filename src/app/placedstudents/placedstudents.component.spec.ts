import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacedstudentsComponent } from './placedstudents.component';

describe('PlacedstudentsComponent', () => {
  let component: PlacedstudentsComponent;
  let fixture: ComponentFixture<PlacedstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacedstudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacedstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
