import Image from "next/image";
import {DownloadButton} from "@/components/DownloadButton";

type OutputProps = {
	pdfUrl: string;
	previewUrl: string;
};

export function Output({ pdfUrl, previewUrl }: OutputProps) {
	return (
		<div className='flex flex-col w-full gap-7 h-full'>
			<div className='flex flex-auto relative w-full h-full'>
				<Image
					src={previewUrl}
					alt={'gore generator output'}
					layout='fill'
					objectFit='scale-down'
				/>
			</div>
			<DownloadButton pdfUrl={pdfUrl} />
		</div>
	);
}
