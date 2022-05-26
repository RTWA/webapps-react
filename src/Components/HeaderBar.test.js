import React from 'react';
import { render, screen } from '@testing-library/react';

import HeaderBar from './HeaderBar';

test('Badge Component Renders', () => {
    render(<HeaderBar data-testid="webapps-HeaderBar-component" />);

    expect(screen.getByTestId('webapps-HeaderBar-component')).toBeDefined();
});