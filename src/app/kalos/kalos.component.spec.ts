import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalosComponent } from './kalos.component';

describe('KalosComponent', () => {
  let component: KalosComponent;
  let fixture: ComponentFixture<KalosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KalosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
