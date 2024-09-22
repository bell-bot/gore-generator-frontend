import OutputPlaceholder from "./OutputPlaceholder";
import Wrapper from "@/components/Wrapper";
import {Output} from "@/components/Output";

export type GeneratorOutputProps = {
	generatorOutputUrl?: string;
	previewUrl?: string;
};

export default function OutputWrapper({
	generatorOutputUrl,
	previewUrl
}: GeneratorOutputProps) {
	return (
		<Wrapper className='flex flex-auto'>
			{generatorOutputUrl ? (
				<Output
					pdfUrl={generatorOutputUrl}
					previewUrl={previewUrl}
				/>
			) : (
				<OutputPlaceholder />
			)}
		</Wrapper>
	);
}