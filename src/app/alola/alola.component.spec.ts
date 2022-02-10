import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlolaComponent } from './alola.component';

describe('AlolaComponent', () => {
  let component: AlolaComponent;
  let fixture: ComponentFixture<AlolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
