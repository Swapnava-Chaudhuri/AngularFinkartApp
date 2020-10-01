import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmodifyuserComponent } from './adminmodifyuser.component';

describe('AdminmodifyuserComponent', () => {
  let component: AdminmodifyuserComponent;
  let fixture: ComponentFixture<AdminmodifyuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmodifyuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmodifyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
