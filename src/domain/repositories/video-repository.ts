import { Video } from 'domain/entities/video';

export interface VideoRepository {
	create(video: Video): Promise<void>
}
