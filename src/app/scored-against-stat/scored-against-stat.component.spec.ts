import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoredAgainstStatComponent } from './scored-against-stat.component';

describe('ScoredAgainstStatComponent', () => {
  let component: ScoredAgainstStatComponent;
  let fixture: ComponentFixture<ScoredAgainstStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoredAgainstStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoredAgainstStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
