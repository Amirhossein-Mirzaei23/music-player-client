import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicTimeComponent } from './music-time.component';

describe('MusicTimeComponent', () => {
  let component: MusicTimeComponent;
  let fixture: ComponentFixture<MusicTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
