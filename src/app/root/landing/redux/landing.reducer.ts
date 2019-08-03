/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Landing component's redux action list
 */

import * as landingActions from './landing.actions';
import { LandingViewModel } from '../models/landing.model';

export function landingReducer( state: LandingViewModel = { username: null, email: null },
                                action: landingActions.actions ): LandingViewModel {
    switch ( action.type ) {
        case landingActions.SET_USERNAME:
            state.username = action.payload;
            return state;
        case landingActions.SET_EMAIL:
            state.email = action.payload;
            return state;
        default:
            return state;
    }
}
