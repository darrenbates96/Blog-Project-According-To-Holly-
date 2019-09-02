import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheblogComponent } from './theblog.component';
import { ThemesComponent } from '../themes/themes.component';
import { PoetryComponent } from '../poetry/poetry.component';

describe('TheblogComponent', () => {
  let component: TheblogComponent;
  let fixture: ComponentFixture<TheblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheblogComponent, ThemesComponent, PoetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
