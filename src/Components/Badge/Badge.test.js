import React from 'react';
import { render, screen } from '@testing-library/react';

import Badge from './Badge';

test('Badge Component Renders', () => {
    render(<Badge data-testid="webapps-Badge-component">Badge</Badge>);

    expect(screen.getByTestId('webapps-Badge-component')).toBeDefined();
});