import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesGurselComponent } from './stories-gursel.component';

describe('StoriesGurselComponent', () => {
  let component: StoriesGurselComponent;
  let fixture: ComponentFixture<StoriesGurselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesGurselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesGurselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
