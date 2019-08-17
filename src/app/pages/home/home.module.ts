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

// Routing
import { HomeRoutingModule } from './home-routing.module';

// UI Modules
import { MaterialModule } from 'src/app/common/modules/material.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollingModule } from '@angular/cdk/scrolling';

// Components
import { HomeComponent } from './components/home.component';
import { StoriesComponent } from '../shared/components/stories/stories.component';

// Repositories
import { PostRepository } from './api/post.repository';
import { StoryRepositoryImpl } from './api/story.repository';

// Services
import { DialogPostService } from '../widgets/dialog-post/dialog-post.service';
import { PostModule } from '../shared/components/post/post.module';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    HomeComponent,
    StoriesComponent,
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
    PostModule,
    InfiniteScrollModule,
    SwiperModule,
    ScrollingModule,
  ]
})
export class HomeModule { }
