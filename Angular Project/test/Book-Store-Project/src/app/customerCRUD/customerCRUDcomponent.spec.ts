import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCRUDComponent } from './customerCRUD.component';

describe('CustomerCRUDComponent', () => {
  let component: CustomerCRUDComponent;
  let fixture: ComponentFixture<CustomerCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerCRUDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
