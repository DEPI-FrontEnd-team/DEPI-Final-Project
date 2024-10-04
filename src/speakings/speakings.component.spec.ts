import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakingsComponent } from './speakings.component';

describe('SpeakingsComponent', () => {
  let component: SpeakingsComponent;
  let fixture: ComponentFixture<SpeakingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
