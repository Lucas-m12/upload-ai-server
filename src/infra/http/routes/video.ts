import fastifyMultipart from '@fastify/multipart';
import { FastifyInstance } from 'fastify';
import { VideoController } from '../controllers/video-controller';

export async function videoRoute(app: FastifyInstance) {
	const videoController = new VideoController();
	app.register(fastifyMultipart, {
		limits: {
			fileSize: 1_048_576 * 25 // 25mb
		}
	});
	app.post('/', async (req, reply) => {
		await videoController.upload(req, reply);
	});
}
