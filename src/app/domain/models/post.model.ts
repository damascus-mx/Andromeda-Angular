/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Post Domain Model
 */

interface Content {
    url: string;
    type: number;
    poster: string;
}
interface Tag {
    type: number;
    tagged: string;
}
interface Comment {
    username: string;
    comment: string;
}
interface Like {
    user: string;
    username: string;
    image: string;
}
export interface Post {
    id: number;
    user: string;
    username: string;
    user_verified: boolean;
    iat: string;
    image: string;
    content: Content[];
    message: string;
    reactions: number;
    likes: Like[];
    total_comments: number;
    comments: Comment[];
    reacted_by_user: boolean;
    comment_by_user: boolean;
    user_comment: string;
    tags: Tag[];
    show: boolean;
}
