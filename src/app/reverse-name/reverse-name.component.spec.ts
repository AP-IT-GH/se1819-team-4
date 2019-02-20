import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseNameComponent } from './reverse-name.component';

describe('ReverseNameComponent', () => {
  let component: ReverseNameComponent;
  let fixture: ComponentFixture<ReverseNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReverseNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
