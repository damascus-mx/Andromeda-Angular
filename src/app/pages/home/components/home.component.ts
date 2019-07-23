/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Home component
 */
import { Component, OnInit, OnDestroy, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { DialogPostComponent } from '../../widgets/dialog-post/dialog-post.component';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DialogPostService } from '../../widgets/dialog-post/dialog-post.service';
import { Title } from '@angular/platform-browser';
import { PostRepository } from '../api/post.repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  posts: any[] = [];
  comment: string;
  currentUser = 'fuckboi69';
  @ViewChildren('postCard') postCards: QueryList<Component>;
  imageItemCollection = [];

  // Swipper
  config: any = {
    slidesPerView: 1,
    // autoHeight: true,
    resizeReInit: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  };

  configStories: any = {
    slidesPerView: 'auto',
    freeMode: true,
    resizeReInit: true,
    grabCursor: true,
  };

  // Disposer
  disposer: Subject<void> = new Subject();


  constructor(public reportDialog: MatDialog, private dialogService: DialogPostService,
              private postRepository: PostRepository) {}

  ngOnInit(): void {
    // this.titleService.setTitle('NightLifeX');
    this.getPosts();
  }

  ngAfterViewInit(): void {
    console.log(this.postCards.toArray());
  }

  getPosts() {
    this.posts = this.postRepository.GetAll();
  }

  onReact(postNumber: number): void {

    if (this.posts[postNumber].reacted_by_user) {
      this.posts[postNumber].reacted_by_user = false;
      this.posts[postNumber].reactions--;
    } else {
      this.posts[postNumber].reacted_by_user = true;
      this.posts[postNumber].reactions++;
    }
  }

  onComment(postNumber: number): void {
    this.comment = null;
    !this.posts[postNumber].comment_by_user ?
    this.posts[postNumber].comment_by_user = true : this.posts[postNumber].comment_by_user = false;
  }

  commentPost(postNumber: number) {
    this.posts[postNumber].user_comment = this.comment;
    this.posts[postNumber].total_comments++;
  }

  // Dispose observers
  ngOnDestroy(): void {
    this.disposer.next();
    this.disposer.complete();
  }

  get totalImagesShown(): number {
    return (this.posts.filter(post => post.show) || []).length;
  }

  openTools(usernamePost: string, opc?: string): void {
    const config = {
      width: '500px',
      data: {
        username: usernamePost
      }
    };

    const dialogRef = this.dialogService.open(DialogPostComponent, config);

    dialogRef.afterClosed().pipe(takeUntil(this.disposer))
    .subscribe((result: any) => {
      console.log('Dialog closed');
    }, err => {

    }, () => {
      // Complete
    });
  }

}
