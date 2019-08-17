import { User } from './user.model';
import { Post } from './post.model';

export interface Place {
    id: number;
    name: string;
    username: string;
    image: string;
    email: string;
    bio: string;
    country: number;
    location: string;
    cordinates: string;
    admins: any[];
    total_followers: number;
    total_following: number;
    followers: User[];
    following: User[];
    posts: Post[];
    verified: boolean;
    active: boolean;
    menu: any;
    schedule: any;
}
