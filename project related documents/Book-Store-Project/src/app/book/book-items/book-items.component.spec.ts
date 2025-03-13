import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookItemsComponent } from './book-items.component';

describe('BookItemsComponent', () => {
  let component: BookItemsComponent;
  let fixture: ComponentFixture<BookItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
