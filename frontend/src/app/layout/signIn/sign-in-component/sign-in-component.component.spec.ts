import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponentComponent } from './sign-in-component.component';

describe('SignInComponentComponent', () => {
  let component: SignInComponentComponent;
  let fixture: ComponentFixture<SignInComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
