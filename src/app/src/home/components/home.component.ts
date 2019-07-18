import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogPostComponent } from '../../shared/widgets/dialog-post/dialog-post.component';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DialogPostService } from '../../shared/widgets/dialog-post/dialog-post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Data
  imageItemCollection = [
    {
      url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      show: false
    },
    {
      url: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/9ad39c541665ce930b19da692bb2b2f5/5DA92CE5/t51.2885-15/e35/p1080x1080/65047793_2295897530524755_8071433904541774619_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
      show: false
    },
    {
      url: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      show: false
    }
  ];

  // Disposer
  disposer: Subject<void> = new Subject();


  constructor(public reportDialog: MatDialog, private dialogService: DialogPostService) { }

  ngOnInit(): void {
  }

  // Dispose observers
  ngOnDestroy(): void {
    this.disposer.next();
    this.disposer.complete();
  }

  get totalImagesShown(): number {
    return (this.imageItemCollection.filter(imageItem => imageItem.show) || []).length;
  }

  openTools(): void {
    const config = {
      width: '500px',
      data: {
        username: 'J Balvin'
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
