import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/domain/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = null;
  isConfig = true;

  tabLoadTimes: Date[] = [];

  constructor(private userService: UserService) {
    this.user = this.userService.GetUserInSession();
    console.log(this.user);
  }

  ngOnInit() {
    console.log('Profile loaded');
  }

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

}
