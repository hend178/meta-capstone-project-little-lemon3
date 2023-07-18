import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';

describe('App', () => {
  it('check if text is present', () => {
    render(<App />);
    const linkElement = screen.getByText(/little lemon/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('BookingForm', () => {
  it('has .disabled class added to the button element', () => {
    render(<BookingForm />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('disabled');
  });
});
