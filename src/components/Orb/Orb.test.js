import React from 'react';
import { render, screen } from '@testing-library/react';
import Orb from './Orb';

describe('Orb tests', () => {
  test('should render an Orb', () => {
    render(
      <Orb />
    );

    const element = screen.getByTestId('orb-element');

    expect(element).toBeInTheDocument();
  });

  test('Orb should be empty', () => {
    render(
      <Orb />
    );

    const element = screen.getByTestId('orb-element');

    expect(element).toBeEmptyDOMElement();
  });
});
