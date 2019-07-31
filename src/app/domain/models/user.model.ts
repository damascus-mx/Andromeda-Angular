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
