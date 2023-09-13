import { } from '@fastify/multipart';
import { UploadVideoUseCase } from 'domain/use-cases/video/upload-video-use-case';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { UploadVideoUseCaseFactory } from 'infra/factories/upload-video-use-case-factory';

export class VideoController {
	uploadVideoUseCase: UploadVideoUseCase;

	constructor() {
		const uploadVideoUseCaseFactory = new UploadVideoUseCaseFactory();
		this.uploadVideoUseCase = uploadVideoUseCaseFactory.create();
	}

	async upload(request: FastifyRequest, reply: FastifyReply) {
		const data = await request.file();
		if (!data) {
			return reply.status(400).send({ error: 'Missing file input' });
		}
		try {
			const response = await this.uploadVideoUseCase.execute({ file: data });
			return reply.status(201).send(response);
		} catch (error) {
			return reply.status(400).send({ error });
		}
	}
}
