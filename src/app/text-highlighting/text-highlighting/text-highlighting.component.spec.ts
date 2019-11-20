import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHighlightingComponent } from './text-highlighting.component';

describe('TextHighlightingComponent', () => {
  let component: TextHighlightingComponent;
  let fixture: ComponentFixture<TextHighlightingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextHighlightingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextHighlightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
