import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { CarouselItem } from '../../../carousel-item.interface';

@Component({
  template: ` <carousel [items]="items"></carousel>`,
})
class TestHostComponent {
  items: CarouselItem = 
    {
      id: 'carousel-item-1',
      photoUrl: 'https://placeimg.com/640/480/tech',
      link: '#',
      text: 'Priority 1',
      priority: 1,
    }  
}

describe('CarouselComponent when tested inside host', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let carouselEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselComponent, TestHostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    carouselEl = fixture.nativeElement.querySelector('.carousel')
    fixture.detectChanges();
  });

  //not working yet
  it('should display the correct text', () => {
    fixture.detectChanges();
    const expectedText = testHost.items.text;
    expect(carouselEl.textContent).toContain(expectedText);
  })
});
