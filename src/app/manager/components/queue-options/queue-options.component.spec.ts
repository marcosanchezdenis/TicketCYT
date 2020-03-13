import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueOptionsComponent } from './queue-options.component';

describe('QueueOptionsComponent', () => {
  let component: QueueOptionsComponent;
  let fixture: ComponentFixture<QueueOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
