
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { PostComponent } from './post.component';

// UI
import { DialogLikesComponent } from './components/likes/likes.component';
import { DialogPostComponent } from 'src/app/pages/widgets/dialog-post/dialog-post.component';

// Modules
import { MaterialModule } from 'src/app/common/modules/material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { ScrollingModule } from '@angular/cdk/scrolling';

// Pipes
import { NoimagePipe } from 'src/app/common/pipes/noimage.pipe';
import { SafeUrlPipe } from 'src/app/common/pipes/safeurl.pipe';
import { ResponsivetextPipe } from 'src/app/common/pipes/responsivetext.pipe';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};

@NgModule({
    declarations: [
        PostComponent,
        DialogLikesComponent,
        DialogPostComponent,
        NoimagePipe,
        SafeUrlPipe,
        ResponsivetextPipe
    ],
    entryComponents: [
        DialogLikesComponent,
        DialogPostComponent
    ],
    providers: [
        {
            provide: SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG
        }
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        InfiniteScrollModule,
        SwiperModule,
        ScrollingModule
    ],
    exports: [
        PostComponent
    ]
})

export class PostModule {}
