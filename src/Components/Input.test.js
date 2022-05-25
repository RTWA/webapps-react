import React from 'react';
import { render, screen } from '@testing-library/react';
import { WebAppsUX } from '../Context/index';

import Input from './Input';

test('Input Component Renders', () => {
    render(<WebAppsUX><Input data-testid="webapps-Input-component" /></WebAppsUX>);

    expect(screen.getByTestId('webapps-Input-component')).toBeDefined();
});