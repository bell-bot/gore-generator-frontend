import { Units } from '@/types/Units';

type GetUrlTestCase = {
	inputs: {
		radius: string;
		nGores: string;
		precision: number;
	};
	expectedValue: string;
};

type RadiusToInchesStringTestCase = {
	inputs: {
		radius: number;
		unit: Units;
	};
	expectedValue: string;
};

export const getUrlTestCases: GetUrlTestCase[] = [
	{
		inputs: { radius: '3', nGores: '6', precision: 50 },
		expectedValue: '/generate?radius=3&n_gores=6&precision=50'
	},
	{
		inputs: { radius: '10.538643', nGores: '12', precision: 100 },
		expectedValue: '/generate?radius=10.538643&n_gores=12&precision=100'
	},
	{
		inputs: {
			radius: '10.538643',
			nGores: '1243628487263874628376487263874873268746238',
			precision: 100
		},
		expectedValue:
			'/generate?radius=10.538643&n_gores=1243628487263874628376487263874873268746238&precision=100'
	},
	{
		inputs: {
			radius: '6.734657537324833e+23',
			nGores: '6',
			precision: 100
		},
		expectedValue:
			'/generate?radius=6.734657537324833e%2B23&n_gores=6&precision=100'
	}
];

export const radiusToInchesStringTestCases: RadiusToInchesStringTestCase[] = [
	{ inputs: { radius: 5, unit: Units.INCHES }, expectedValue: '5' },
	{ inputs: { radius: 67.6345, unit: Units.INCHES }, expectedValue: '67.6345' },
	{
		inputs: {
			// eslint-disable-next-line @typescript-eslint/no-loss-of-precision
			radius: 673465753732483268746328.324582348732687468732648726387,
			unit: Units.INCHES
		},
		expectedValue: '6.734657537324833e+23'
	}
];
