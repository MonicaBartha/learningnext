import { render} from "@testing-library/react";
import ContainedButton from './ContainedButton'; 

const renderComponent = () => render(<ContainedButton />);

describe('<ContainedButton />', () => {
    test('ContainedButton renders correctly', () => {
      const { getByTestId } = renderComponent();
      expect(getByTestId('ContainedButton')).toBeDefined();
    });
    test('ContainedButton to have data-testid attribute', () => {
      const { getByTestId } = renderComponent();
      expect(getByTestId('ContainedButton')).toHaveAttribute('data-testid', 'ContainedButton');
    });
});

