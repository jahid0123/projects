import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteComponent } from './update-delete.component';

describe('UpdateDeleteComponent', () => {
  let component: UpdateDeleteComponent;
  let fixture: ComponentFixture<UpdateDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
