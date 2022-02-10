import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalarComponent } from './galar.component';

describe('GalarComponent', () => {
  let component: GalarComponent;
  let fixture: ComponentFixture<GalarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
