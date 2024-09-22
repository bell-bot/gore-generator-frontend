import JSZip from 'jszip';
import { ResponseData } from '@/types/ResponseData';

export async function unzip(buffer: ArrayBuffer) {
	return JSZip.loadAsync(buffer).then(async function (zip) {
		console.log(zip.files);
		const pdfUrl = await zip
			.file('tmp/tmp.pdf')
			?.async('blob')
			.then(function (blob) {
				return window.URL.createObjectURL(blob);
			})
			.catch(function (err) {
				throw err;
			});

		const pngUrl = await zip
			.file('tmp/tmp.png')
			?.async('blob')
			.then(function (blob) {
				return window.URL.createObjectURL(blob);
			})
			.catch(function (err) {
				throw err;
			});

        if (pdfUrl && pngUrl) {
					return { pdfUrl: pdfUrl, pngUrl: pngUrl } as ResponseData;
				}

				throw new Error('Could not extract files from zip archive');
	});
}
