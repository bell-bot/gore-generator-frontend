import { BaseInputProps } from '@/types/BaseInputProps';

type SliderInputProps = BaseInputProps & {
	min: number;
	max: number;
	defaultValue: number;
	step: string;
	setValue: (value: number) => void;
};

export default function SliderInput({
	inputId,
	inputLabel,
	min,
	max,
	defaultValue,
	step,
	setValue
}: SliderInputProps) {

	return (
		<div className=''>
			<label
				htmlFor={inputId}
				className='block text-sm font-medium leading-6 text-gray-900 dark:text-white'
			>
				{inputLabel}
			</label>
			<div className='mt-2'>
				<div className='relative mb-6'>
					<input
						id={inputId}
						name={inputId}
						type='range'
						className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 dark:text-white'
						value={defaultValue}
                        onChange={(e) => setValue(Number(e.target.value))}
						min={min}
						max={max}
						required
						step={step}
					/>
					<span className='text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6 dark:text-white'>
						low
					</span>
					<span className='text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6 dark:text-white'>
						high
					</span>
				</div>
			</div>
		</div>
	);
}