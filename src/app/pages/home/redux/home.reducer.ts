/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Home component's redux reducer
 */

import * as homeActions from './home.actions';
import { Post } from 'src/app/domain/models/post.model';

export function homeReducer( state: Post, action: homeActions.actions ): any {
    switch ( action.type ) {
        case homeActions.LIKE:
            return state.reacted_by_user = true;
        default:
            return state;
    }
}

