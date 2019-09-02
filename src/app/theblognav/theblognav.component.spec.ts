import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheblognavComponent } from './theblognav.component';

describe('TheblognavComponent', () => {
  let component: TheblognavComponent;
  let fixture: ComponentFixture<TheblognavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheblognavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheblognavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
