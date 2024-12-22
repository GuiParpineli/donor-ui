import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBmiAgeComponent } from './dashboard-bmi-age.component';

describe('DashboardBmiAgeComponent', () => {
  let component: DashboardBmiAgeComponent;
  let fixture: ComponentFixture<DashboardBmiAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardBmiAgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardBmiAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
