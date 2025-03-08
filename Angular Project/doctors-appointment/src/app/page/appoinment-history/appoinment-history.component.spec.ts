import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentHistoryComponent } from './appoinment-history.component';

describe('AppoinmentHistoryComponent', () => {
  let component: AppoinmentHistoryComponent;
  let fixture: ComponentFixture<AppoinmentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppoinmentHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppoinmentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
