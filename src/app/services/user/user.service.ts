/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Andromeda's user service
 */

import { Injectable } from '@angular/core';
import { User } from 'src/app/domain/models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { SignUpViewModel } from 'src/app/root/signup/models/signup.models';
import { USERS } from 'src/app/common/mock/user.mock';

@Injectable()
export class UserService {
    private user: User;

    constructor(private cookieService: CookieService) {
        this.generateUser();
    }

    Create(model: SignUpViewModel): void {
        // Wrap data
        const user: User = {
            name: model.name,
            surname: model.surname,
            username: model.username,
            email: model.email,
            password: model.password,
            user_pic: null,
            followers: 0,
            posts: null,
            actual_state: null
        };

        USERS.push(user);
    }

    GetById(id: any): User {
        return USERS[id];
    }

    GetAll(): User[] {
        return USERS;
    }

    logIn(user: string, password: string): boolean {
        let userToLog: User = null;

        for (const userDB of USERS) {
            if (userDB.email === user || userDB.username === user) {
                if (userDB.password === password) {
                    userToLog = userDB;
                    this.user = userToLog;

                    const userToStore = JSON.stringify(userToLog);
                    this.cookieService.set('auth', userToStore);
                    return true;
                }
            }
        }

        return false;
    }

    logOut(): void {
        this.user = null;
        this.cookieService.deleteAll();
    }

    isLogged(): boolean {
        return this.cookieService.check('auth') ? true : false;
    }

    getUser(): User {
        this.user = JSON.parse(this.cookieService.get('auth'));
        return this.user;
    }

    private generateUser() {
        const user = {
            username: 'elvergudo',
            email: 'elvergalarga@outlook.com',
            password: 'caca123',
            name: 'Elver',
            surname: 'Gudo',
            user_pic: 'https://scontent-lax3-1.cdninstagram.com/vp/3c71640e03a6e75b7e97921a084ae304/5DEB0112/t51.2885-19/s320x320/65807850_333791757565999_6726542801334435840_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com',
            followers: 580,
            actual_state: null,
            posts: null
        };
        USERS.push(user);
    }
}
