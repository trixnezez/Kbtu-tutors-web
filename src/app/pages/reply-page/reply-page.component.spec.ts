import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyPageComponent } from './reply-page.component';

describe('ReplyComponent', () => {
  let component: ReplyPageComponent;
  let fixture: ComponentFixture<ReplyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
