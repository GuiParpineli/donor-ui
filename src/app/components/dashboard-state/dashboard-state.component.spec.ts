import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStateComponent } from './dashboard-state.component';

describe('DashboardStateComponent', () => {
  let component: DashboardStateComponent;
  let fixture: ComponentFixture<DashboardStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
