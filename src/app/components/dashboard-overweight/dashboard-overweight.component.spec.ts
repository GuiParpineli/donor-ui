import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOverweightComponent } from './dashboard-overweight.component';

describe('DashboardOverweightComponent', () => {
  let component: DashboardOverweightComponent;
  let fixture: ComponentFixture<DashboardOverweightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardOverweightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardOverweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
