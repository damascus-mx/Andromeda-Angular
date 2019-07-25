import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogLikesData {
  Id: any;
}

@Component({
  selector: 'app-dialog-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class DialogLikesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogLikesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogLikesData) {}

  ngOnInit(): void {
    !this.data ? this.data.Id = 'undefined' : null;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
