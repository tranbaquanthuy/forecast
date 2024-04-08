import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders page successfully', () => {
    render(<App />);
    const linkElement = screen.getByText(/Today/i);
    expect(linkElement).toBeInTheDocument();
});
