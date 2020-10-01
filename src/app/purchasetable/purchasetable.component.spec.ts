import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasetableComponent } from './purchasetable.component';

describe('PurchasetableComponent', () => {
  let component: PurchasetableComponent;
  let fixture: ComponentFixture<PurchasetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
