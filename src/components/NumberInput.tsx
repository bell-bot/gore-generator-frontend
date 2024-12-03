import { BaseInputProps } from '@/types/BaseInputProps';
import ErrorBanner from "@/components/ErrorBanner";

type NumberInputProps = BaseInputProps & {
	min?: number;
	errorRule: string;
	setValue: (value: string) => void;
};

export default function NumberInput({
	inputId,
	inputLabel,
	min,
	isError,
	errorRule,
	setValue
}: NumberInputProps) {

	return (
		<div>
			<label
				htmlFor={inputId}
				className='block text-sm font-medium leading-6 text-gray-900 dark:text-white'
			>
				{inputLabel}
			</label>
				<div className='flex flex-col w-0 min-w-full mt-2'>
					<div
						className='flex flex-grow rounded-md shadow-sm ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>

						<input
							id={inputId}
							name={inputId}
							type='text'
							className='block rounded-md flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 dark:text-white'
							required
							min={min}
							onChange={(e) => setValue(e.target.value)}
						/>
					</div>
					<div className="flex flex-wrap">
						{isError && <ErrorBanner errorMessage={errorRule}/>}
					</div>
				</div>
		</div>
	);
}