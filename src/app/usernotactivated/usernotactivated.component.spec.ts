import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernotactivatedComponent } from './usernotactivated.component';

describe('UsernotactivatedComponent', () => {
  let component: UsernotactivatedComponent;
  let fixture: ComponentFixture<UsernotactivatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernotactivatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernotactivatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
