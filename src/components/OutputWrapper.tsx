import OutputPlaceholder from "./OutputPlaceholder";
import Wrapper from "@/components/Wrapper";
import {Output} from "@/components/Output";
import { Suspense } from 'react';
import { LoadingImage } from './LoadingImage';

export type GeneratorOutputProps = {
	generatorOutputUrl?: string;
	previewUrl?: string;
	isLoading: boolean;
};

export default function OutputWrapper({
	generatorOutputUrl,
	previewUrl,
	isLoading
}: GeneratorOutputProps) {
	console.log(isLoading);
	return (
		<Wrapper className='flex flex-auto'>
			{isLoading ? (
				<LoadingImage />
			) : generatorOutputUrl && previewUrl ? (
				<Suspense fallback={<LoadingImage />}>
					<Output
						pdfUrl={generatorOutputUrl}
						previewUrl={previewUrl}
					/>
				</Suspense>
			) : (
				<OutputPlaceholder />
			)}
		</Wrapper>
	);
}