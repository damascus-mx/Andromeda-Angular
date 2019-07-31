/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Post repository implementation
 */
import { Repository } from 'src/app/core/repositories/repository';
import { POSTS } from 'src/app/common/mock/post.mock';
import { Post } from 'src/app/domain/models/post.model';


export class PostRepository implements Repository<Post> {
    constructor() {}

    GetAll(): any[] {
        return POSTS;
    }
    GetById(id: any) {
        return POSTS[id];
    }
    Create(model: any): void {
        throw new Error("Method not implemented.");
    }
    Update(id: any): void {
        throw new Error("Method not implemented.");
    }
    Delete(id: any): void {
        throw new Error("Method not implemented.");
    }

}
