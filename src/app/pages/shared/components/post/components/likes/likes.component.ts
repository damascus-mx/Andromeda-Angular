import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PostRepository } from 'src/app/pages/home/api/post.repository';
import { Post } from 'src/app/domain/models/post.model';

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
  selectedUser: any = null;

  constructor(
    public dialogRef: MatDialogRef<DialogLikesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogLikesData, private postRepository: PostRepository) {
    }

  ngOnInit(): void {
    !this.data ? this.data.Id = 'undefined' : this.post = this.postRepository.GetById(this.data.Id);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
