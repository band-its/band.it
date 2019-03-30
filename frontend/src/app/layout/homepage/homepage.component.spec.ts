import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';
import {AppComponent} from '../../app.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it(`should have as title 'Band.It'`, () => {
    // const fixture = TestBed.createComponent(HomepageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Band.It');
  });

  it('should render title in a h1 tag', () => {
    // const fixture = TestBed.createComponent(HomepageComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Band.It!');
  });
});
