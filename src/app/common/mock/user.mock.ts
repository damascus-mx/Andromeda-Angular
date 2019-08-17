/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description User data mocker
 */

import { User } from 'src/app/domain/models/user.model';
import { POSTS } from './post.mock';

export const USERS: User[] = [
    {
        id: 0,
        username: 'hiramuzl',
        email: 'hiram.feo@outlook.com',
        password: 'caca123',
        name: 'Hiram',
        surname: 'Muñoz',
        image: 'https://scontent-lax3-1.cdninstagram.com/vp/3c71640e03a6e75b7e97921a084ae304/5DEB0112/t51.2885-19/s320x320/65807850_333791757565999_6726542801334435840_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com',
        total_followers: 9588,
        total_following: 143,
        following: [],
        followers: [],
        verified: false,
        actual_state: 'Republica CUU',
        active: true,
        posts: [POSTS[4]],
        private: true
    },
    {
        id: 1,
        username: 'danbilzerian',
        email: 'dan.bilzerian@outlook.com',
        password: 'dan1234',
        name: 'Dan',
        surname: 'Bilzerian',
        image: 'https://instagram.fntr6-1.fna.fbcdn.net/vp/d15e96067143bbcbaae4ceefc5766723/5DB494FF/t51.2885-19/s150x150/41677722_309612136484816_4022476815346958336_n.jpg?_nc_ht=instagram.fntr6-1.fna.fbcdn.net',
        total_followers: 78584623,
        total_following: 100,
        following: [],
        followers: [],
        verified: true,
        actual_state: 'Marquee Las Vegas',
        active: false,
        posts: [POSTS[0]],
        private: false
    }
];
