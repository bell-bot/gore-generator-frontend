import JSZip from 'jszip';
import { ResponseData } from '@/types/ResponseData';

export async function unzip(buffer: ArrayBuffer) {
	return JSZip.loadAsync(buffer).then(async function (zip) {
		console.log(zip.files);

		const pdfFileName = Object.keys(zip.files).find(name => name.endsWith('.pdf'));
		
		const pngFileName = Object.keys(zip.files).find(name => name.endsWith('.png'));
		
		if (!pdfFileName || !pngFileName) {
			throw new Error('Could not find PDF or PNG file in zip archive');
		}

		const pdfUrl = await zip
			.file(pdfFileName)
			?.async('blob')
			.then(function (blob) {
				return window.URL.createObjectURL(blob);
			})
			.catch(function (err) {
				throw err;
			});

		const pngUrl = await zip
			.file(pngFileName)
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
