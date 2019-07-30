/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Home component
 */
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { PostRepository } from '../api/post.repository';
import { Post } from 'src/app/domain/models/post.model';
import { Story } from 'src/app/domain/models/story.model';
import { StoryRepositoryImpl } from '../api/story.repository';
import { ADS } from 'src/app/common/mock/ads.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  // Data
  posts: Post[] = [];
  stories: Story[] = [];
  ads: any[] = ADS;
  private allPost: Post[] = [];

  // Infinite scroll props
  private finishPage: number;
  private actualPage: number;
  private showUpButton: boolean;
  @ViewChild(CdkVirtualScrollViewport, { static: false }) viewport: CdkVirtualScrollViewport;

  // Disposer
  disposer: Subject<void> = new Subject();

  constructor(private postRepository: PostRepository, private storyRepository: StoryRepositoryImpl) {
    this.actualPage = 0;
    this.showUpButton = false;
  }

  ngOnInit(): void {
    // this.titleService.setTitle('NightLifeX');
    this.getData();
  }

  ngAfterViewInit(): void {
  }

  getData(): void {
    this.allPost = this.postRepository.GetAll();
    this.finishPage = this.allPost.length - 1;

    this.posts.push(this.postRepository.GetById(this.actualPage));
    this.stories = this.storyRepository.GetAll();
  }


  // Dispose observers
  ngOnDestroy(): void {
    this.disposer.next();
    this.disposer.complete();
  }

  onScroll(): void {
    if (this.actualPage < this.finishPage) {
      this.actualPage++;
      this.getData();
      console.log('Getting data');
    }
  }

  scrollTop(): void {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0;
  }

}
