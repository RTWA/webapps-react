import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './Button';
import { WebAppsUX } from '../Context/index';

test('Button Component Renders', () => {
    render(<WebAppsUX><Button data-testid="webapps-Button-component">Button Test</Button></WebAppsUX>);

    expect(screen.getByTestId('webapps-Button-component')).toBeDefined();
});