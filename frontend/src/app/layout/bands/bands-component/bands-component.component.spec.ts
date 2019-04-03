import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsComponentComponent } from './bands-component.component';

describe('BandsComponentComponent', () => {
  let component: BandsComponentComponent;
  let fixture: ComponentFixture<BandsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
