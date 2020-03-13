import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTurnDisplayComponent } from './current-turn-display.component';

describe('CurrentTurnDisplayComponent', () => {
  let component: CurrentTurnDisplayComponent;
  let fixture: ComponentFixture<CurrentTurnDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTurnDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTurnDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
