import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniComponent } from './uni-component';

describe('UniComponent', () => {
  let component: UniComponent;
  let fixture: ComponentFixture<UniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UniComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
