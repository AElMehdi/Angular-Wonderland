import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3BasicNetworkDiagramComponent } from './d3-basic-network-diagram.component';

describe('D3BasicNetworkDiagramComponent', () => {
  let component: D3BasicNetworkDiagramComponent;
  let fixture: ComponentFixture<D3BasicNetworkDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3BasicNetworkDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3BasicNetworkDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
