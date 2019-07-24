import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogPostService } from 'src/app/pages/widgets/dialog-post/dialog-post.service';
import { DialogPostComponent } from 'src/app/pages/widgets/dialog-post/dialog-post.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Post } from 'src/app/domain/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() post: Post;
  comment: string;
  currentUser = 'fuckboi69';
  // Swipper
  postSwiper: any = {
    slidesPerView: 1,
    // autoHeight: true,
    resizeReInit: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  };
  // Disposer
  disposer: Subject<void> = new Subject();

  constructor(public reportDialog: MatDialog, private dialogService: DialogPostService,) {
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
    this.post.user_comment = this.comment;
    this.post.total_comments++;
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
