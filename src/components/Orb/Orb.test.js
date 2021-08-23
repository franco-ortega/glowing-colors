import React from 'react';
import { render, screen } from '@testing-library/react';
import Orb from './Orb';

describe('Orb tests', () => {
  it('should render an Orb', () => {
    render(
      <Orb />
    );

    const element = screen.getByTestId('orb-element');

    expect(element).toBeInTheDocument();
  });
});
