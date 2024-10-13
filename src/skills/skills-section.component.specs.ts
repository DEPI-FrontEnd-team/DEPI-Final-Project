import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsSectionComponent } from './skills.component';

describe('SkillsSectionComponent', () => {
  let component: SkillsSectionComponent;
  let fixture: ComponentFixture<SkillsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 6 logo items', () => {
    const logoItems = fixture.nativeElement.querySelectorAll('.logo-item');
    expect(logoItems.length).toBe(6);
  });

  it('should have correct skill titles', () => {
    const skillTitles = fixture.nativeElement.querySelectorAll('.java-script-mastery, .full-stack-development, .expert-teaching');
    expect(skillTitles[0].textContent).toContain('JavaScript Mastery');
    expect(skillTitles[1].textContent).toContain('Full-Stack Development');
    expect(skillTitles[2].textContent).toContain('Expert Teaching');
  });
});
