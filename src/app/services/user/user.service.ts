import { Injectable } from "@angular/core";
import { User } from 'src/app/domain/models/user.model';

@Injectable()
export class UserService {
    private user: User;

    constructor() {
    }

    logIn(): void {
        this.user = {
            username: 'elvergudo',
            name: 'Elver',
            surname: 'Gudo',
            user_pic: 'https://scontent-lax3-1.cdninstagram.com/vp/3c71640e03a6e75b7e97921a084ae304/5DEB0112/t51.2885-19/s320x320/65807850_333791757565999_6726542801334435840_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com',
            followers: 580,
            actual_state: null,
            posts: null
        };
    }

    isLogged(): boolean {
        this.logIn();
        return this.user ? true : false;
    }
}
