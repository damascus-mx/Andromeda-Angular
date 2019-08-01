/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Landing - Register component
 */

import { Component, OnInit } from '@angular/core';
import { APP_NAME } from 'src/app/config/app.config';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  // App name
  appName: string = APP_NAME;

  constructor() { }

  ngOnInit() {
  }

}
