import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KantoComponent } from './kanto.component';

describe('KantoComponent', () => {
  let component: KantoComponent;
  let fixture: ComponentFixture<KantoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KantoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KantoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
