/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Stories repository implementation
 */

import { StoryRepository } from 'src/app/core/repositories/story.repository';
import { Story } from 'src/app/domain/models/story.model';
import { STORIES } from 'src/app/common/mock/story.mock';

export class StoryRepositoryImpl implements StoryRepository {
    GetAll(): Story[] {
        return STORIES;
    }
    GetById(id: number): Story {
        return STORIES[id];
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