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

