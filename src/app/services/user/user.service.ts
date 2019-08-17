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
    }

    Create(model: SignUpViewModel): void {
        // Wrap data
        const user: User = {
            id: this.GetAll().length++ - 1,
            name: model.name,
            surname: model.surname,
            username: model.username,
            email: model.email,
            password: model.password,
            image: null,
            total_followers: 0,
            total_following: 0,
            following: [],
            followers: [],
            verified: false,
            posts: [],
            active: false,
            actual_state: null,
            private: true
        };

        USERS.push(user);
    }

    GetById(id: any): User {
        return USERS[id];
    }

    GetAll(): User[] {
        return USERS;
    }

    GetByUsername(username: string): User {
        let user: User = null;

        USERS.forEach(userInDB => {
            user = userInDB.username === username ? userInDB : user;
            if ( user ) { return; }
        });

        return user;
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
        this.cookieService.delete('auth');
    }

    isLogged(): boolean {
        return this.cookieService.check('auth') ? true : false;
    }

    GetUserInSession(): User {
        this.user = JSON.parse(this.cookieService.get('auth'));
        return this.user;
    }

    UpdateSession(): void {
        const oldUser: User = this.GetUserInSession();
        const updatedUser = this.GetById(oldUser.id);
        this.cookieService.delete('auth');
        this.cookieService.set('auth', JSON.stringify(updatedUser));
    }
}
