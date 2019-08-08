/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description User Domain Model
 */
import { Post } from './post.model';

export interface User {
    username: string;
    email: string;
    password: string;
    name: string;
    surname: string;
    image: string;
    total_followers: number;
    followers: User[];
    total_following: number;
    following: User[];
    actual_state: string;
    active: boolean;
    posts: Post[];
}
