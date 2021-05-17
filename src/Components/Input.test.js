import React from 'react';
import { render, screen } from '@testing-library/react';
import { WebApps } from '../Context/index';

import Input from './Input';

test('Input Component Renders', () => {
    render(<WebApps><Input data-testid="webapps-Input-component" /></WebApps>);

    expect(screen.getByTestId('webapps-Input-component')).toBeDefined();
});