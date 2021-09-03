import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

describe('Welcome tests', () => {
  test('should render the Welcome component', () => {
    render(
      <Welcome onBeginClick={() => {}} fadeOut={false} />
    );

    const element = screen.getByText('Glowing Colors');

    expect(element).toHaveTextContent('Glowing Colors');
  });
});
