import { randomUUID } from 'node:crypto';
import path from 'node:path';

export class Video {
	private extension = '';
	public uploadDestination = '';

	constructor(
		readonly filename: string,
		readonly id?: string,
	) {
		if (!this.id) {
			this.id = randomUUID();
		}
		this.setExtension();
		this.setUploadDestination();
	}

	private setExtension() {
		const extension = path.extname(this.filename);
		if (extension !== '.mp3') {
			throw new Error('Invalid input type, please upload MP3');
		}
		this.extension = extension;
	}

	private setUploadDestination() {
		const fileBaseName = path.basename(this.filename, this.extension);
		const fileUploadName = `${fileBaseName}-${randomUUID()}${this.extension}`;
		this.uploadDestination = path.resolve(__dirname, '../../../tmp', fileUploadName);
	}
}
