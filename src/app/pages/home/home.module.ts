/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Home routing module
 */
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeferLoadModule } from '@trademe/ng-defer-load';

// Routing
import { HomeRoutingModule } from './home-routing.module';

// UI Modules
import { MaterialModule } from 'src/app/common/modules/material.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

// Components
import { HomeComponent } from './components/home.component';
import { DialogPostComponent } from '../widgets/dialog-post/dialog-post.component';
import { PostComponent } from '../shared/components/post/post.component';
import { StoriesComponent } from '../shared/components/stories/stories.component';

// Pipes
import { NoimagePipe } from 'src/app/common/pipes/noimage.pipe';
import { SafeUrlPipe } from 'src/app/common/pipes/safeurl.pipe';
import { ResponsivetextPipe } from 'src/app/common/pipes/responsivetext.pipe';

// Repositories
import { PostRepository } from './api/post.repository';
import { StoryRepositoryImpl } from './api/story.repository';

// Services
import { DialogPostService } from '../widgets/dialog-post/dialog-post.service';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    HomeComponent,
    PostComponent,
    DialogPostComponent,
    StoriesComponent,
    NoimagePipe,
    SafeUrlPipe,
    ResponsivetextPipe
  ],
  entryComponents: [
    DialogPostComponent,
  ],
  providers: [
    DialogPostService,
    PostRepository,
    StoryRepositoryImpl,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    DeferLoadModule,
    SwiperModule,
  ]
})
export class HomeModule { }
