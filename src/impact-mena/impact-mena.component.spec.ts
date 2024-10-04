import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactMenaComponent } from './impact-mena.component';

describe('ImpactMenaComponent', () => {
  let component: ImpactMenaComponent;
  let fixture: ComponentFixture<ImpactMenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactMenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactMenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
