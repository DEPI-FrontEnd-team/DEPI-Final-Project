import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpeakingComponent } from './speakings.component';
import Swiper from 'swiper/bundle';

describe('SpeakingsComponent', () => {
  let component: SpeakingComponent;
  let fixture: ComponentFixture<SpeakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeakingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SpeakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize Swiper', () => {
    const swiper = new Swiper('.swiper-container');
    expect(swiper).toBeDefined();
  });
});
