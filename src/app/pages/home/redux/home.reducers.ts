/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Home component's redux reducers
 */

import { Post } from 'src/app/domain/models/post.model';

export interface AppState {
    post: Post;
}
