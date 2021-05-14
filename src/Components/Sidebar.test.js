import React from 'react';
import { render, screen } from '@testing-library/react';

import Sidebar from './Sidebar';

test('Sidebar Component Renders', () => {
    render(<Sidebar />);

    // expect(screen.getByTestId('webapps-Sidebar-component')).toBeDefined();
});