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
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  // App name
  appName: string = APP_NAME;
  isLoading = false;

  constructor() {
    library.add(faTwitter);
    library.add(faFacebook);
    library.add(faInstagram);
  }

  ngOnInit() {
  }

  onRegister(): void {
    if (this.isLoading === false) {
      console.log('Requesting data...');
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    }
  }

}
