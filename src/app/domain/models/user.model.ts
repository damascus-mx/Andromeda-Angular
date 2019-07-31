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
    name: string;
    surname: string;
    user_pic: string;
    followers: number;
    actual_state: string;
    posts: Post[];
}
