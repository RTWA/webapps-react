import React from 'react';
import { render, screen } from '@testing-library/react';
import { WebAppsUX } from '../Context/index';

import Sidebar from './Sidebar';

test('Sidebar Component Renders', () => {
    render(<WebAppsUX><Sidebar data-testid="sidebar" /></WebAppsUX>);

    // Not great...
    expect(screen.getByTestId('sidebar')).toBeDefined();
});