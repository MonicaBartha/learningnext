import { render} from "@testing-library/react";
import Card from './Card'; 

const renderComponent = () => render(<Card
  />);

describe('<Card />', () => {
    test('Card renders correctly', () => {
      const { getByTestId } = renderComponent();
      expect(getByTestId('Card')).toBeDefined();
    });
    test('Card to have data-testid attribute', () => {
      const { getByTestId } = renderComponent();
      expect(getByTestId('Card')).toHaveAttribute('data-testid', 'Card');
    });
    test('CardContent renders correctly', () => {
      const { getByTestId } = renderComponent();
      expect(getByTestId('CardContent')).toBeDefined();
    });
    test('CardContent to have data-testid attribute', () => {
      const { getByTestId } = renderComponent();
      expect(getByTestId('CardContent')).toHaveAttribute('data-testid', 'CardContent');
    });
    test('TitleCard renders correctly', () => {
      const { getByTestId } = renderComponent();
      expect(getByTestId('TitleCard')).toBeDefined();
    });
    test('TitleCard to have data-testid attribute', () => {
      const { getByTestId } = renderComponent();
      expect(getByTestId('TitleCard')).toHaveAttribute('data-testid', 'TitleCard');
    });
    test('ParagraphCard renders correctly', () => {
      const { getByTestId } = renderComponent();
      expect(getByTestId('ParagraphCard')).toBeDefined();
    });
    test('ParagraphCard to have data-testid attribute', () => {
      const { getByTestId } = renderComponent();
      expect(getByTestId('ParagraphCard')).toHaveAttribute('data-testid', 'ParagraphCard');
    });
    test('CardActions renders correctly', () => {
      const { getByTestId } = renderComponent();
      expect(getByTestId('CardActions')).toBeDefined();
    });
    test('CardActions to have data-testid attribute', () => {
      const { getByTestId } = renderComponent();
      expect(getByTestId('CardActions')).toHaveAttribute('data-testid', 'CardActions');
    });
    test('Button renders correctly', () => {
      const { getByTestId } = renderComponent();
      expect(getByTestId('CardButton')).toBeDefined();
    });
    test('CardButton to have data-testid attribute', () => {
      const { getByTestId } = renderComponent();
      expect(getByTestId('CardButton')).toHaveAttribute('data-testid', 'CardButton');
    });
});
