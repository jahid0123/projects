import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRegComponent } from './customer-reg.component';

describe('CustomerREGComponent', () => {
  let component: CustomerRegComponent;
  let fixture: ComponentFixture<CustomerRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerRegComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
