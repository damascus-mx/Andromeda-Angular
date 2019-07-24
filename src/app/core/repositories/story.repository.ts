import { Repository } from './repository';
import { Story } from 'src/app/domain/models/story.model';

export interface StoryRepository extends Repository<Story> {
}
