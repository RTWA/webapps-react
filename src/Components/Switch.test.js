import React from 'react';
import { render, screen } from '@testing-library/react';

import Switch from './Switch';

test('Switch Component Renders', () => {
    render(<Switch data-testid="webapps-Switch-component" />);

    expect(screen.getByTestId('webapps-Switch-component')).toBeDefined();
});