import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinnohComponent } from './sinnoh.component';

describe('SinnohComponent', () => {
  let component: SinnohComponent;
  let fixture: ComponentFixture<SinnohComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinnohComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinnohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
