import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAvgYearComponent } from './dashboard-avg-year.component';

describe('DashboardAvgYearComponent', () => {
  let component: DashboardAvgYearComponent;
  let fixture: ComponentFixture<DashboardAvgYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAvgYearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAvgYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
