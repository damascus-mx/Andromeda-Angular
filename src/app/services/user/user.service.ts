/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Andromeda's user service
 */

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

        const userToStore = JSON.stringify(this.user);
        localStorage.setItem('credentials', userToStore);
    }

    logOut(): void {
        this.user = null;
        localStorage.clear();
    }

    isLogged(): boolean {
        this.logIn();
        const userLogged = localStorage.getItem('credentials');
        return userLogged ? true : false;
    }

    getUser(): User {
        this.user = JSON.parse(localStorage.getItem('credentials'));
        return this.user;
    }
}
