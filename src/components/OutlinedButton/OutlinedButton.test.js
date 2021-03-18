import React from 'react';
import { render } from '@testing-library/react';
import OutlinedButton from './OutlinedButton';

const renderComponent = () => render(<OutlinedButton />);

describe('<OutlinedButton />', () => {
  test('OutlinedButton renders correctly', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('OutlinedButton')).toBeDefined();
  });
});
