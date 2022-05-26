import React from 'react';
import { render, screen } from '@testing-library/react';

import AppPage from './AppPage';

test('Badge Component Renders', () => {
    render(<AppPage data-testid="webapps-AppPage-component" id="Test" />);

    expect(screen.getByTestId('webapps-AppPage-component')).toBeDefined();
});