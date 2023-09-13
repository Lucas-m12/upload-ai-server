import { Video } from 'domain/entities/video';
import { VideoRepository } from 'domain/repositories/video-repository';
import { prisma } from 'infra/lib/prisma';

export class PrismaVideoRepository implements VideoRepository {
	async create(video: Video): Promise<void> {
		await prisma.video.create({
			data: {
				id: video.id,
				path: video.uploadDestination,
				name: video.filename
			}
		});
	}

}
