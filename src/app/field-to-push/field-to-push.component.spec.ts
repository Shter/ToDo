import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldToPushComponent } from './field-to-push.component';

describe('FieldToPushComponent', () => {
  let component: FieldToPushComponent;
  let fixture: ComponentFixture<FieldToPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldToPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldToPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
