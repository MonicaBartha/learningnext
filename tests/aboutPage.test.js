import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AboutPage from '../pages/about';

const renderComponent = () => render(<AboutPage />);

describe('<AboutPage />', () => {
  test('AboutPage-Container renders correctly', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('AboutPage-Container')).toBeDefined();
  });
  test('Button renders correctly', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('AboutPage-HomeButton')).toBeDefined();
  });
  test('Anchor renders correctly', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('AboutPage-ContactButton')).toBeDefined();
  });
  test('Anchor to have href attribute', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('AboutPage-ContactButton')).toHaveAttribute('href', '/contact');
  });
  test('render correct content', () => {
    const { getByText } = renderComponent();
    getByText('Contact Us');
    getByText('Go to Home');
  });
  test('AboutPage-ContactButton renders correctly', () => {
    const { getByTestId } = renderComponent();
    const homeButton = screen.getByTestId('AboutPage-ContactButton');
    expect(homeButton).toBeInTheDocument();
    expect(homeButton).toHaveTextContent('Contact Us');
  });
  test('AboutPage-HomeButton renders correctly', () => {
    const { getByTestId } = renderComponent();
    const contactButton = screen.getByTestId('AboutPage-HomeButton');
    expect(contactButton).toBeInTheDocument();
    expect(contactButton).toHaveTextContent('Go to Home');
  });
  test('AboutPage-ContactButton was clicked', () => {
    const { getByText } = renderComponent();
    const handleClick = jest.fn();
    fireEvent.click(screen.getByText('Test'))
    expect(handleClick).not.toHaveBeenCalled();
  });
  
});
