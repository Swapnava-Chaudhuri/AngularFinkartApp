import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernotregisteredComponent } from './usernotregistered.component';

describe('UsernotregisteredComponent', () => {
  let component: UsernotregisteredComponent;
  let fixture: ComponentFixture<UsernotregisteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernotregisteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernotregisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
