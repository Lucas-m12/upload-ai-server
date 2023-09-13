import { Video } from 'domain/entities/video';
import { VideoRepository } from 'domain/repositories/video-repository';
import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { UploadVideoDto } from './dto/upload-video-dto';

export class UploadVideoUseCase {
	constructor(
		private readonly videoRepository: VideoRepository
	) {}

	async execute(uploadVideoDto: UploadVideoDto) {
		const { file } = uploadVideoDto;
		const video = new Video(file.filename);
		await pipeline(file.file, fs.createWriteStream(video.uploadDestination));
		console.log('opa');
		await this.videoRepository.create(video);
		console.log('opa2');
	}
}
