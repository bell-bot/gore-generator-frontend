export type BaseInputProps = {
	inputId: string;
	inputLabel: string;
	defaultValue?: unknown;
	isError?: boolean;
	setValue: (value: any) => void;
};