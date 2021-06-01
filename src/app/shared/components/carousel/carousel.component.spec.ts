import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { CarouselItem } from '../../../carousel-item.interface';
import { By } from '@angular/platform-browser';

@Component({
  template: ` <app-carousel [items]="items"></app-carousel>`,
})
class TestHostComponent {
  items: CarouselItem[] = [
    {
      id: 'carousel-item-1',
      photoUrl: 'https://placeimg.com/640/480/tech',
      link: '#',
      text: 'Priority 1',
      priority: 1,
    },
    {
      id: 'carousel-item-2',
      photoUrl: 'https://placeimg.com/640/480/tech',
      link: '#',
      text: 'Priority 2',
      priority: 2,
    },
  ];
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
    fixture.detectChanges();
    carouselEl = fixture.nativeElement.querySelector('.carousel');
  });

  it('should contain the correct text', () => {
    expect(carouselEl.textContent).toContain('Priority 1');
    expect(carouselEl.textContent).toContain('Priority 2');
  });
});

describe('Carousel Component methods tested in isolation from the parent component', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let receivedItemsArr: CarouselItem[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    receivedItemsArr = [
      {
        id: 'carousel-item-1',
        photoUrl: 'https://placeimg.com/640/480/tech',
        link: '#',
        text: 'Priority 1',
        priority: 1,
      },
      {
        id: 'carousel-item-2',
        photoUrl: 'https://placeimg.com/640/480/tech',
        link: '#',
        text: 'Priority 2',
        priority: 2,
      },
    ];

    component.items = receivedItemsArr;
    fixture.detectChanges();
  });

  const carousel = {
    get nativeEl() {
      return fixture.debugElement.query(By.css('.product-card-carousel')).nativeElement;
    }
  };

  it('should show the second item once the next button is clicked', () => {
    carousel.nativeEl.style.width = '400px';
    const expectedTranslateX = `translateX(-400px)`;
    component.moveRight();
    fixture.detectChanges();
    expect(component.currentTranslateXValue).toBe(expectedTranslateX);
  });

  it('should show the first item once the prev button is clicked', () => {
    carousel.nativeEl.style.width = '400px';
    const expectedTranslateX = `translateX(0px)`;
    component.moveRight();
    component.moveLeft();
    fixture.detectChanges();
    expect(component.currentTranslateXValue).toBe(expectedTranslateX);
  });

  it('should not moveRight if the last item is currently being shown', () => {
    carousel.nativeEl.style.width = '400px';
    const expectedTranslateX = `translateX(-400px)`;
    component.moveRight();
    component.moveRight();
    fixture.detectChanges();
    expect(component.currentTranslateXValue).toBe(expectedTranslateX);
  });

  
  it('should not moveLeft if the first item is currently being shown', () => {
    carousel.nativeEl.style.width = '400px';
    const expectedTranslateX = `translateX(0px)`;
    component.moveLeft();
    fixture.detectChanges();
    expect(component.currentTranslateXValue).toBe(expectedTranslateX);
  });
});
