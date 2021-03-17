import { render} from "@testing-library/react";
import Header from './Header';

const renderComponent = () => render(<Header />);

describe('<Header />', () => {
  test('Header renders correctly', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('AppBar')).toBeDefined();
  });
  test('Header to have data-testid attribute', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('AppBar')).toHaveAttribute('data-testid', 'AppBar');
  });
  test('Toolbar renders correctly', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('Toolbar')).toBeDefined();
  });
  test('Toolbar to have data-testid attribute', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('Toolbar')).toHaveAttribute('data-testid', 'Toolbar');
  });
  test('MenuItem renders correctly', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('MenuItem')).toBeDefined();
  });
  test('MenuItem to have data-testid attribute', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('MenuItem')).toHaveAttribute('data-testid', 'MenuItem');
  });
  test('MenuDiv renders correctly', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('MenuDiv')).toBeDefined();
  });
});