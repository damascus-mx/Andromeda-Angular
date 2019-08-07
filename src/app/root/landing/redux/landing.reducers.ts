/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Landing component's redux action list
 */

import { LandingViewModel } from '../models/landing.model';

export interface AppState {
    SIGN_UP: LandingViewModel;
}
