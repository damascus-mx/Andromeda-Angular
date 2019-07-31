/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Generic popup
 */

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// Entry data
interface DialogData {
  username: string;
}

@Component({
  selector: 'app-dialog-post',
  templateUrl: './dialog-post.component.html',
  styleUrls: ['./dialog-post.component.css']
})
export class DialogPostComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
    !this.data ? this.data.username = 'undefined' : null;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
