import { Action } from '@ngrx/store';

export const LIKE = '[Post] LIKE';
export const COMMENT = '[Post] COMMENT';

export class LikeAction implements Action {
    readonly type = LIKE;

    // Payload goes here
    constructor() {}
}

export class CommentAction implements Action {
    readonly type = COMMENT;

    // Payload goes here
    constructor() {}
}

export type actions =   LikeAction |
                        CommentAction;
