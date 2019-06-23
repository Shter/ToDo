import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementOfInputComponent } from './element-of-input.component';

describe('ElementOfInputComponent', () => {
  let component: ElementOfInputComponent;
  let fixture: ComponentFixture<ElementOfInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementOfInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementOfInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
