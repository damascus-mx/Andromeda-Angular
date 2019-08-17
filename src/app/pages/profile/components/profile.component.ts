import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/domain/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { Subject } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Post } from 'src/app/domain/models/post.model';
import { PostRepository } from '../../home/api/post.repository';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  // Data
  user: User = null;
  posts: Post[] = [];

  // UI
  isConfig = false;
  isPrivate = false;
  tabLoadTimes: Date[] = [];

  // URL / URI
  urlParams: ParamMap;

  // Disposer
  disposer: Subject<void> = new Subject();

  constructor(private userService: UserService, private router: ActivatedRoute, private postRepository: PostRepository) {

    // Modify props if not config mode
    this.router.paramMap.pipe(takeUntil(this.disposer))
    .subscribe(params => {
      this.urlParams = params;

      this.isConfig = this.urlParams.keys.length > 0 ? false : true;

      // Refresh session if config mode enabled
      if (this.isConfig) {
        this.userService.UpdateSession();
      }

      // Get user by username if not config mode
      !this.isConfig ?
      this.user = this.userService.GetByUsername(this.urlParams.get('username')) :
      this.user = this.userService.GetUserInSession();

      if (!this.user) {
        this.user = this.generateFakeUser();
      }

      this.getAllUserPost();
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.disposer.next();
    this.disposer.complete();
  }

  getTimeLoaded(index: number): Date {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

  // Helpers
  getAllUserPost(): void {
    if (this.user.username) {
      this.posts = this.postRepository.GetAllUserPosts(this.user.username);
    }
  }

  generateFakeUser(): User {
    return {
      id: -1,
      username: null,
      email: null,
      password: null,
      name: null,
      surname: null,
      image: null,
      total_followers: 0,
      total_following: 0,
      following: [],
      followers: [],
      verified: false,
      actual_state: null,
      active: false,
      posts: [],
      private: true
    };
  }

}
