import React from 'react';
import { render, screen } from '@testing-library/react';

import Badge from './Badge';
import { BrowserRouter } from 'react-router-dom';

test('Badge Component Renders', () => {
    render(<Badge data-testid="webapps-Badge-component">Badge</Badge>);

    expect(screen.getByTestId('webapps-Badge-component')).toBeDefined();
});

test('Badge Component Renders as NavLink', () => {
    render(<BrowserRouter><Badge to="/test" data-testid="webapps-BadgeNavLink-component">Badge</Badge></BrowserRouter>);

    expect(screen.getByTestId('webapps-BadgeNavLink-component')).toBeDefined();
});