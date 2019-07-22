import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogPostComponent } from '../../shared/widgets/dialog-post/dialog-post.component';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DialogPostService } from '../../shared/widgets/dialog-post/dialog-post.service';
import { Title } from '@angular/platform-browser';
import { PostRepository, Post } from '../api/post.repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  imageItemCollection = [];

  // Swipper
  config: any = {
    slidesPerView: 1,
    autoHeight: true,
    resizeReInit: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  };

  configStories: any = {
    slidesPerView: 5,
    freeMode: true,
  };

  // Disposer
  disposer: Subject<void> = new Subject();


  constructor(public reportDialog: MatDialog, private dialogService: DialogPostService,
              private postRepository: PostRepository) {}

  ngOnInit(): void {
    // this.titleService.setTitle('NightLifeX');
    this.getPosts();
    this.generatePost();
  }

  getPosts() {
    this.posts = this.postRepository.GetAll();
  }

  generatePost(): void {
    this.posts.forEach(post => {
      if ( post.content.length > 1 ) {
      }
    });
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
    !this.posts[postNumber].comment_by_user ?
    this.posts[postNumber].comment_by_user = true : this.posts[postNumber].comment_by_user = false;
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
