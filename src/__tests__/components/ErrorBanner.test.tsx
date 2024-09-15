import ErrorBanner from '@/components/ErrorBanner';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('<ErrorBanner/>', () => {
	it('Then shows correct error message', () => {
		render(<ErrorBanner errorMessage={'Test Error'} />);

		const errorText = screen.getByRole('alert');

		expect(errorText).toHaveTextContent('Test Error');
	});
});
