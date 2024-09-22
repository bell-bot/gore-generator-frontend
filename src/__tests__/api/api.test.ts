import { getUrl, radiusToInchesString } from '@/api/api';
import { getUrlTestCases, radiusToInchesStringTestCases } from './testCases';

describe('GET', () => {
	getUrlTestCases.forEach(({ inputs, expectedValue }) => {
		test(`with radius=${inputs.radius}, nGores=${inputs.nGores}, and precision=${inputs.precision}, then returns url ${expectedValue}`, () => {
			const actualValue = getUrl(
				inputs.radius,
				inputs.nGores,
				inputs.precision
			);

			expect(actualValue).toEqual(expectedValue);
		});
	});

	radiusToInchesStringTestCases.forEach(({ inputs, expectedValue }) => {
		test(`With radius=${inputs.radius} and unit=${inputs.unit}, returns string ${expectedValue}`, () => {
			const actualValue = radiusToInchesString(inputs.unit, inputs.radius);

			expect(actualValue).toEqual(expectedValue);
		});
	});
});
