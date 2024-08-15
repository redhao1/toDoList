import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDoneDialogComponent } from './all-done-dialog.component';

describe('AllDoneDialogComponent', () => {
  let component: AllDoneDialogComponent;
  let fixture: ComponentFixture<AllDoneDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllDoneDialogComponent]
    });
    fixture = TestBed.createComponent(AllDoneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
