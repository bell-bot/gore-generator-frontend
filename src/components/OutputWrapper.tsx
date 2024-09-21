import OutputPlaceholder from "./OutputPlaceholder";
import Wrapper from "@/components/Wrapper";
import {Output} from "@/components/Output";

export type GeneratorOutputProps = {
    generatorOutputUrl?: string;
}

export default function OutputWrapper({generatorOutputUrl}: GeneratorOutputProps) {
    return (
        <Wrapper className="flex flex-auto">
            { generatorOutputUrl ? <Output imageUrl={generatorOutputUrl} /> : <OutputPlaceholder/>}

        </Wrapper>
    )
}