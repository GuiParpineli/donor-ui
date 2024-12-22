import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPossibleReceiversComponent } from './dashboard-possible-receivers.component';

describe('DashboardPossibleReceiversComponent', () => {
  let component: DashboardPossibleReceiversComponent;
  let fixture: ComponentFixture<DashboardPossibleReceiversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPossibleReceiversComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPossibleReceiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
