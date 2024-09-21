import { BaseInputProps } from '@/types/BaseInputProps';
import {Units} from "@/types/Units";

export type SelectorInputProps = BaseInputProps & {
	options: object;
	value: Units;
	setValue: (value: Units) => void;
};

export default function SelectorInput({
	inputLabel,
	options,
	inputId,
	value,
	setValue
}: SelectorInputProps) {
	return (
		<div>
			<label
				htmlFor={inputId}
				className='block text-sm font-medium leading-6 text-gray-900'
			>
				{inputLabel}
			</label>
			<div className='mt-2'>
				<div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
					<select
						id={inputId}
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						onChange={(e) => setValue(e.target.value as Units)}
						value={value}
					>
						{Object.entries(options).map((entry) => {
							return (
								<option
									value={entry[1]}
									key={entry[0]}
								>
									{entry[1]}
								</option>
							);
						})}
					</select>
				</div>
			</div>
		</div>
	);
}