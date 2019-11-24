import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSelectionComponent } from './text-selection.component';

describe('TextHighlightingComponent', () => {
  let component: TextSelectionComponent;
  let fixture: ComponentFixture<TextSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
