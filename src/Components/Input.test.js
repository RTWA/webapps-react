import React from 'react';
import { render, screen } from '@testing-library/react';

import Input from './Input';

test('Input Component Renders', () => {
    render(<Input data-testid="webapps-Input-component" />);

    expect(screen.getByTestId('webapps-Input-component')).toBeDefined();
});