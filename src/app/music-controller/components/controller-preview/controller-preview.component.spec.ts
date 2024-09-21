import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerPreviewComponent } from './controller-preview.component';

describe('ControllerPreviewComponent', () => {
  let component: ControllerPreviewComponent;
  let fixture: ComponentFixture<ControllerPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControllerPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllerPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
