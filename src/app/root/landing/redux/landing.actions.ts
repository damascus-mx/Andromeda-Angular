/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Landing component's redux action list
 */

import { Action } from '@ngrx/store';

export const SET_USERNAME = '[Auth] SET_USERNAME';
export const SET_EMAIL = '[Auth] SET_EMAIL';

export class SetUsernameAction implements Action {
    readonly type = SET_USERNAME;

    // Payload goes here
    constructor(public payload: string) {}
}

export class SetEmailAction implements Action {
    readonly type = SET_EMAIL;

    constructor(public payload: string) {}
}

export type actions = SetUsernameAction | SetEmailAction;
