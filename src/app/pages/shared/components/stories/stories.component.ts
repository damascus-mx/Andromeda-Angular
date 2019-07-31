/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Stories component
 */
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit, OnDestroy {
  @Input() title: string = null;
  @Input() stories: any;

  // Swipper
  storiesSwiper: any = {
    observer: true,
    slidesPerView: 'auto',
    freeMode: true,
    freeModeFluid : true,
    resizeReInit: true,
    grabCursor: true,
    preloadImages: false,
    watchSlidesVisibility: false,
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 5,
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader',
    }
  };
  // Disposer
  disposer: Subject<void> = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
