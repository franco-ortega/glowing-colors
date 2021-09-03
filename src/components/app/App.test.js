import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App tests', () => {

  test('renders App', () => {
    render(<App />);
    const element = screen.getByTestId('app');
    expect(element).toBeInTheDocument();
  });

  test('Orb renders in App', () => {
    render(<App />);
    const button = screen.getByText('Begin');
    fireEvent.click(button);
    
    waitFor(() => {
      const elements = screen.getAllByTestId('orb-element');
      elements.forEach(element => {
        expect(element).toBeInTheDocument();
      });
    });
  });

  test('Welcome renders in App', () => {
    render(<App />);
    const welcome = screen.getByText('Glowing Colors');
    
    expect(welcome).toBeInTheDocument();
  });

  test('Welcome is removed from view after Continue button is clicked', () => {
    render(<App />);
    const welcome = screen.getByText('Glowing Colors');
    const button = screen.getByText('Begin');

    fireEvent.click(button);

    waitFor(() => {
      expect(welcome).not.toBeInTheDocument();
    });
    
  });

});
