import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCountdownComponent } from './date-countdown.component';

describe('DateCountdownComponent', () => {
  let component: DateCountdownComponent;
  let fixture: ComponentFixture<DateCountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateCountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
