import {Units} from '@/types/Units';
import NumberInput from './NumberInput';
import SelectorInput from './SelectorInput';
import SliderInput from './SliderInput';
import Wrapper from "@/components/Wrapper";
import {GET} from "@/api/api";
import {N_GORES_ERROR_RULE, RADIUS_ERROR_RULE} from "@/util/constants";
import {FormEvent, useEffect, useState} from "react";
import {validateRadius} from "@/form-validators/validateRadius";
import {validateNGores} from "@/form-validators/validateNGores";

type FormProps = {
	setGoreUrl: (url: string) => void;
	setPreviewUrl: (url: string) => void;
	setIsLoading: (isLoading: boolean) => void;
};

export function Form({ setGoreUrl, setPreviewUrl, setIsLoading }: FormProps) {
	const [radius, setRadius] = useState<string>();
	const [nGores, setNGores] = useState<string>();
	const [units, setUnits] = useState<Units>(Units.INCHES);
	const [precision, setPrecision] = useState<number>(50);
	const [isRadiusError, setIsRadiusError] = useState(false);
	const [isNGoresError, setIsNGoresError] = useState(false);

	async function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const isValidRadius = radius && validateRadius(radius);
		const isValidNGores = nGores && validateNGores(nGores);

		if (isValidRadius && isValidNGores) {
			setIsLoading(true);
			const response = GET(units, Number(radius), nGores, precision);
			response.then(function (response) {
				setGoreUrl(response.pdfUrl);
				setPreviewUrl(response.pngUrl);
				setIsLoading(false);
			});
		}

		if (!isValidRadius) {
			setIsRadiusError(true);
		}

		if (!isValidNGores) {
			setIsNGoresError(true);
		}
	}

	useEffect(() => {
		if (isRadiusError && radius) {
			setIsRadiusError(false);
		}
	}, [isRadiusError, radius]);

	useEffect(() => {
		if (isNGoresError && nGores) {
			setIsNGoresError(false);
		}
	}, [isNGoresError, nGores]);

	return (
		<Wrapper className='mb-auto justify-items-start'>
			<form
				onSubmit={(e) => handleOnSubmit(e)}
				noValidate={true}
			>
				<div className='space-y-12 text-left'>
					<div className='pb-12'>
						<p className='mt-1 text-sm leading-6 text-gray-600'>
							Enter the information of the desired hemisphere.
						</p>
						<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8'>
							<SelectorInput
								inputId={'unit'}
								inputLabel={'Unit'}
								options={Units}
								value={units}
								setValue={setUnits}
							/>
							<NumberInput
								inputId={'radius'}
								inputLabel={'Radius of the hemisphere.'}
								errorRule={RADIUS_ERROR_RULE}
								isError={isRadiusError}
								setValue={setRadius}
							/>
							<NumberInput
								inputId={'nGores'}
								inputLabel={'Desired number of gores.'}
								errorRule={N_GORES_ERROR_RULE}
								isError={isNGoresError}
								setValue={setNGores}
							/>
							<SliderInput
								inputId={'precision'}
								inputLabel={'Precision'}
								defaultValue={precision}
								step={'0.1'}
								min={0}
								max={100}
								setValue={setPrecision}
							/>
						</div>
					</div>
				</div>
				<div className='flex flex-row justify-end'>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow'
						type='submit'
					>
						Submit
					</button>
				</div>
			</form>
		</Wrapper>
	);
}