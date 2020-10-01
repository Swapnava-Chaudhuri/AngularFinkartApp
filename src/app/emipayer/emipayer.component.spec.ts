import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmipayerComponent } from './emipayer.component';

describe('EmipayerComponent', () => {
  let component: EmipayerComponent;
  let fixture: ComponentFixture<EmipayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmipayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmipayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
