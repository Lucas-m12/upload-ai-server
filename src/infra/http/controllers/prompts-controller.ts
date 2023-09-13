import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from 'infra/lib/prisma';

export class PromptController {
	async findAllPromptsController(request: FastifyRequest, reply: FastifyReply) {
		const prompts = await prisma.prompt.findMany();
		reply.send(prompts);
		return prompts;
	}
}
