import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballPageComponent } from './basketball-page.component';

describe('BasketballPageComponent', () => {
  let component: BasketballPageComponent;
  let fixture: ComponentFixture<BasketballPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketballPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketballPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
