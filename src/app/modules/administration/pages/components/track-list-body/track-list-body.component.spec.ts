import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackListBodyComponent } from './track-list-body.component';

describe('TrackListBodyComponent', () => {
  let component: TrackListBodyComponent;
  let fixture: ComponentFixture<TrackListBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackListBodyComponent]
    });
    fixture = TestBed.createComponent(TrackListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
