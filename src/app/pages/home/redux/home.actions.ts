/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Home component's redux action list
 */

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
