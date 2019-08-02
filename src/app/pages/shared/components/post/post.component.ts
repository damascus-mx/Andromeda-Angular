/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Post main component - container
 */

import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogPostService } from 'src/app/pages/widgets/dialog-post/dialog-post.service';
import { DialogPostComponent } from 'src/app/pages/widgets/dialog-post/dialog-post.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Post } from 'src/app/domain/models/post.model';
import { DialogLikesComponent, DialogLikesData } from './components/likes/likes.component';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { User } from 'src/app/domain/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() post: Post;
  comment: string;

  // Credentials
  user: User;

  // Swipper
  postSwiper: SwiperConfigInterface = {
    observer: true,
    slidesPerView: 1,
    // autoHeight: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    zoom: true,
    preloadImages: false,
    lazy: {
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: true,
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader',
    }
  };
  // Disposer
  disposer: Subject<void> = new Subject();

  constructor(public reportDialog: MatDialog, private dialogService: DialogPostService, private userService: UserService) {
    this.user = this.userService.getUser();
  }

  ngOnInit(): void {
  }

  // Dispose observers
  ngOnDestroy(): void {
    this.disposer.next();
    this.disposer.complete();
  }

  onReact(): void {

    if (this.post.reacted_by_user) {
      this.post.reacted_by_user = false;
      this.post.reactions--;
    } else {
      this.post.reacted_by_user = true;
      this.post.reactions++;
    }
  }

  onComment(): void {
    this.comment = null;
    !this.post.comment_by_user ?
    this.post.comment_by_user = true : this.post.comment_by_user = false;
  }

  commentPost() {
    if ( this.comment !== null ) {
      this.post.user_comment = this.comment;
      this.post.total_comments++;
    }
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
    }, err => {

    }, () => {
      // Complete
    });
  }

  openLikes(postId: any): void {
    // Payload data
    const payload: DialogLikesData = {
      Id: postId
    };

    // Dialog
    const config = {
      width: '250px',
      data: payload
    };

    const dialogRef = this.dialogService.open(DialogLikesComponent, config);

    dialogRef.afterClosed().pipe(takeUntil(this.disposer))
    .subscribe((result: any) => {
    }, err => {

    }, () => {
      // Complete
    });
  }

}
