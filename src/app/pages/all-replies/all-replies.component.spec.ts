import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRepliesComponent } from './all-replies.component';

describe('AllRepliesComponent', () => {
  let component: AllRepliesComponent;
  let fixture: ComponentFixture<AllRepliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRepliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRepliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
