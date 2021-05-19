import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './Button';
import { WebApps } from '../Context/index';

test('Button Component Renders', () => {
    render(<WebApps><Button data-testid="webapps-Button-component">Button Test</Button></WebApps>);

    expect(screen.getByTestId('webapps-Button-component')).toBeDefined();
});