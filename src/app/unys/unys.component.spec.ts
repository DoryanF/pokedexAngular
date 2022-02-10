import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnysComponent } from './unys.component';

describe('UnysComponent', () => {
  let component: UnysComponent;
  let fixture: ComponentFixture<UnysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
