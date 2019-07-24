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