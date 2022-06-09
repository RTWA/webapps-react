import React from 'react';
import { render, screen } from '@testing-library/react';

import AppLoader from './AppLoader';

test('AppLoader Component Renders', () => {
    render(<AppLoader data-testid="webapps-AppLoader-component" id="Test" />);
    expect(screen.getByTestId('webapps-AppLoader-component')).toBeDefined();
});

test('AppLoader Component Renders with Theme', () => {
    render(<AppLoader data-testid="webapps-AppLoaderThemed-component" id="Test" theme="indigo" />);
    expect(screen.getByTestId('webapps-AppLoaderThemed-component')).toBeDefined();
});