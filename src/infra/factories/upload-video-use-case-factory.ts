import { UploadVideoUseCase } from 'domain/use-cases/video/upload-video-use-case';
import { PrismaVideoRepository } from 'infra/db/prisma/repositories/prisma-video-repository';

export class UploadVideoUseCaseFactory {
	opa = 'lucas';

	create() {
		const videoRepository = new PrismaVideoRepository();
		const uploadVideoUseCase = new UploadVideoUseCase(videoRepository);
		return uploadVideoUseCase;
	}
}
