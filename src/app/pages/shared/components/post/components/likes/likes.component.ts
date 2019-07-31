/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Post's like dialog component
 */

import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PostRepository } from 'src/app/pages/home/api/post.repository';
import { Post } from 'src/app/domain/models/post.model';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

export interface DialogLikesData {
  Id: any;
}

@Component({
  selector: 'app-dialog-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class DialogLikesComponent implements OnInit {
  post: Post;
  likes: any[] = [];
  selectedUser: any = null;

  // Scrolling
  private currentPage: number;
  private maxPage: number;
  @ViewChild(CdkVirtualScrollViewport, { static: false }) viewport: CdkVirtualScrollViewport;

  constructor(
    public dialogRef: MatDialogRef<DialogLikesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogLikesData, private postRepository: PostRepository) {
      this.currentPage = 0;
    }

  ngOnInit(): void {
    !this.data ? this.data.Id = 'undefined' : this.fetchData();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  fetchData(): void {
    this.post = this.postRepository.GetById(this.data.Id);
    this.maxPage = this.post.likes.length;
    this.fetchLikes();
  }

  fetchLikes(): void {
    let limit = 1;
    for (let i = this.currentPage; i < this.maxPage; i++ ) {
      if ( limit <= 3 ) {
        this.likes.push(this.post.likes[i]);
        limit++;
      } else {
        continue;
      }
    }
  }

  onScroll(): void {
    if (this.currentPage <= this.maxPage - 1) {
      this.currentPage += 3;
      this.fetchLikes();
      console.log('Get likes');
    }
  }

}
