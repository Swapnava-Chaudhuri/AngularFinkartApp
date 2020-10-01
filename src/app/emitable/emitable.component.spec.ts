import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitableComponent } from './emitable.component';

describe('EmitableComponent', () => {
  let component: EmitableComponent;
  let fixture: ComponentFixture<EmitableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
