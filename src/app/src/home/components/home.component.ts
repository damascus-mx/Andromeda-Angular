import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogPostComponent } from '../../shared/widgets/dialog-post/dialog-post.component';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DialogPostService } from '../../shared/widgets/dialog-post/dialog-post.service';

export interface Post {
  user: string;
  user_verified: boolean;
  iat: string;
  user_pic: string;
  type: number;
  content: string[];
  message: string;
  reactions: number;
  total_comments: number;
  comments: string[];
  reacted_by_user: boolean;
  show: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Data
  posts: Post[] = [
    { user: 'Bruno Arevalo', iat: '10 min. ago',
      user_pic: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      content: ['https://material.angular.io/assets/img/examples/shiba2.jpg'], reactions: 29, total_comments: 3, comments: null,
      message: 'Oliendo a unas perras #UltraMacho #JustDogLife', reacted_by_user: false, show: false, user_verified: false,
      type: 0
    },
    { user: 'J Balvin', iat: '1 hr. ago',
      user_pic: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/5f1a2aa20cc7f2f598c74988f27ce707/5DC81F40/t51.2885-19/s150x150/50949721_1502579463208225_2518030465403715584_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
      content: ['https://instagram.fntr6-1.fna.fbcdn.net/vp/9ad39c541665ce930b19da692bb2b2f5/5DA92CE5/t51.2885-15/e35/p1080x1080/65047793_2295897530524755_8071433904541774619_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net'],
      reactions: 4000578, total_comments: 368485, comments: null,
      message: 'Dios bendiga al reggaeton #jbalvin #bitches #fuckyeah', reacted_by_user: false, show: false, user_verified: true, type: 0
    },
    { user: 'Andrea Londo', iat: '20 hr. ago',
      user_pic: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/e32d31ccca074bca06c666594378c824/5DC7A5D7/t51.2885-19/s150x150/60785370_607950006349317_3238344477202448384_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
      content: ['https://instagram.fntr6-1.fna.fbcdn.net/vp/6c0c99dbc8e7c4aba83ceaa9f2d91033/5DBC12E7/t51.2885-15/e35/p1080x1080/66190662_494378431316293_5490537779108975537_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net'],
      reactions: 10699, total_comments: 139, comments: null,
      message: 'when your horoscope says ‘you’re finally going to attain emotional consciousness and break out of self destructive emotional cycles’ 👀 @nadunb @itspaigepelfrey',
      reacted_by_user: true, show: false, user_verified: true, type: 2
    },
    { user: 'The Film Enthusiast', iat: '8 min. ago',
      user_pic: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/28bcf60122d2533dcffdff38320ff357/5DCF07D0/t51.2885-19/s150x150/60760279_442245146561471_7971197295486042112_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
      content: [
        'https://instagram.fntr6-1.fna.fbcdn.net/vp/2d31c8e816e3f27479da13c2d9748665/5D345D5A/t50.2886-16/67657447_508302069913936_6626636448623702362_n.mp4?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
        'https://instagram.fntr6-1.fna.fbcdn.net/vp/a754f3f39cec88005aaa46d1dd004d55/5D33F863/t51.2885-15/e35/67137280_935794703427310_6630961622201072724_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net'
      ],
      reactions: 8579, total_comments: 54, comments: null,
      message: '#StrangerThings Season 4 set to begin shooting in October this year, according to a new listing from Production Weekly. This means that the new season of the hit series could premiere in 2020! 💥[via @filmthusiastnews]',
      reacted_by_user: false, show: false, user_verified: false, type: 1
    },
  ];
  imageItemCollection = [];

  // Disposer
  disposer: Subject<void> = new Subject();


  constructor(public reportDialog: MatDialog, private dialogService: DialogPostService) { }

  ngOnInit(): void {
    this.generatePost();
  }

  generatePost(): void {
    this.posts.forEach(post => {
      this.imageItemCollection.push({ url: post.content, show: false });
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
