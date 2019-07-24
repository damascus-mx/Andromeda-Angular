import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit, OnDestroy {
  @Input() stories: any;

  // Swipper
  storiesSwiper: any = {
    slidesPerView: 'auto',
    freeMode: true,
    resizeReInit: true,
    grabCursor: true,
  };
  // Disposer
  disposer: Subject<void> = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
