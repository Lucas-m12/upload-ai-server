import { FastifyInstance } from 'fastify';
import { PromptController } from '../controllers/prompts-controller';

export const promptsRoute = async (app: FastifyInstance) => {
	const promptController = new PromptController();
	app.get('/', promptController.findAllPromptsController);
};
