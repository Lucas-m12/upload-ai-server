import { fastify } from 'fastify';
import { promptsRoute } from 'infra/http/routes/prompts';
import { videoRoute } from 'infra/http/routes/video';


const PORT = 3333;

const app = fastify();
app.register(promptsRoute, { prefix: '/api/prompts' });
app.register(videoRoute, { prefix: '/api/videos' });

app.listen({
	port: PORT,
}).then(() => {
	console.log('Server running at port', PORT);
});
