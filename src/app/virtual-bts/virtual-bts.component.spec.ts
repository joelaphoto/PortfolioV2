import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualBtsComponent } from './virtual-bts.component';

describe('VirtualBtsComponent', () => {
  let component: VirtualBtsComponent;
  let fixture: ComponentFixture<VirtualBtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualBtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualBtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
