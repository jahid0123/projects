import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApprovalDetailsComponent } from './post-approval-details.component';

describe('PostApprovalDetailsComponent', () => {
  let component: PostApprovalDetailsComponent;
  let fixture: ComponentFixture<PostApprovalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostApprovalDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostApprovalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
