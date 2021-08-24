import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  test('renders App', () => {
    render(<App />);
    const element = screen.getByTestId('app');
    expect(element).toBeInTheDocument();
  });

  test('Orb renders in App', () => {
    render(<App />);
    const elements = screen.getAllByTestId('orb-element');
    
    elements.forEach(element => {
      expect(element).toBeInTheDocument();
    });
  });

});
