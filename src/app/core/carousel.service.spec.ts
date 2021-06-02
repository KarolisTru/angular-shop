import { TestBed } from '@angular/core/testing';

import { CarouselService } from './carousel.service';
import { CarouselItem } from '../carousel-item.interface';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('CarouselService', () => {
  let service: CarouselService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CarouselService],
    });
    service = TestBed.inject(CarouselService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getCarouselItems()', () => {
    let expectedCarouselItems: CarouselItem[];

    beforeEach(() => {
      expectedCarouselItems = [
        {
          id: 'carousel-item-1',
          photoUrl: 'https://placeimg.com/640/480/tech',
          link: '#',
          text: 'Priority 1',
          priority: 1,
        },
        {
          id: 'carousel-item-2',
          photoUrl: 'https://placeimg.com/640/480/nature',
          link: '#',
          text: 'Priority 3',
          priority: 3,
        },
      ];
    });

    it('should return expectedCarouselItems', () => {
      service.getCarouselItems().subscribe((receivedItems) => {
        expect(receivedItems).toEqual(expectedCarouselItems);
      });
      const req = httpTestingController.expectOne('/api/carousel');
      expect(req.request.method).toEqual('GET');
      req.flush(expectedCarouselItems);
    });

    it('should return empty array on network error', () => {
      service.getCarouselItems().subscribe(
        (receivedItems) => {
          expect(receivedItems).toEqual([]);
        },
      );

      const req = httpTestingController.expectOne('/api/carousel');
      req.error(new ErrorEvent('network error'));
    });
  });
});
