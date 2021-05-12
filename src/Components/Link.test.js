import React from 'react';
import { render, screen } from '@testing-library/react';

import Link from './Link';

test('Link Component Renders', () => {
    render(<Link data-testid="webapps-Link-component" />);

    expect(screen.getByTestId('webapps-Link-component')).toBeDefined();
});