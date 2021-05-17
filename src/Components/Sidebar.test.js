import React from 'react';
import { render, screen } from '@testing-library/react';
import { WebApps } from '../Context/index';

import Sidebar from './Sidebar';

test('Sidebar Component Renders', () => {
    render(<WebApps><Sidebar /></WebApps>);

    // Not great...
    expect(screen.getByRole('list')).toBeDefined();
});