import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsComponentComponent } from './songs-component.component';

describe('SongsComponentComponent', () => {
  let component: SongsComponentComponent;
  let fixture: ComponentFixture<SongsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
