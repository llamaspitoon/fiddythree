import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersPicksComponent } from './players-picks.component';

describe('PlayersPicksComponent', () => {
  let component: PlayersPicksComponent;
  let fixture: ComponentFixture<PlayersPicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersPicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersPicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
