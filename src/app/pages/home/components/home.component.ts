/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Home component
 */
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PostRepository } from '../api/post.repository';
import { Post } from 'src/app/domain/models/post.model';
import { Story } from 'src/app/domain/models/story.model';
import { StoryRepositoryImpl } from '../api/story.repository';
import { ADS } from 'src/app/common/mock/ads.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  // Data
  posts: Post[] = [];
  stories: Story[] = [];
  ads: any[] = ADS;

  // Disposer
  disposer: Subject<void> = new Subject();

  constructor(private postRepository: PostRepository, private storyRepository: StoryRepositoryImpl) {}

  ngOnInit(): void {
    // this.titleService.setTitle('NightLifeX');
    this.getData();
  }

  ngAfterViewInit(): void {
  }

  getData() {
    this.posts = this.postRepository.GetAll();
    this.stories = this.storyRepository.GetAll();
  }


  // Dispose observers
  ngOnDestroy(): void {
    this.disposer.next();
    this.disposer.complete();
  }

  get totalImagesShown(): number {
    return (this.posts.filter(post => post.show) || []).length;
  }

}
