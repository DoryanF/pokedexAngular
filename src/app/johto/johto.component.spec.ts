import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JohtoComponent } from './johto.component';

describe('JohtoComponent', () => {
  let component: JohtoComponent;
  let fixture: ComponentFixture<JohtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JohtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JohtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
