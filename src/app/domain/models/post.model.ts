interface Content {
    url: string;
    type: number;
    show: boolean;
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
    user_pic: string;
}
export interface Post {
    user: string;
    username: string;
    user_verified: boolean;
    iat: string;
    user_pic: string;
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
