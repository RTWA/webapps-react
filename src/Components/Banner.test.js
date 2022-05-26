import React from 'react';
import { render, screen } from '@testing-library/react';

import Banner from './Banner';
import { BrowserRouter } from 'react-router-dom';

test('Banner Component Renders', () => {
    render(<Banner data-testid="webapps-Banner-component">This is the banner for testing</Banner>);

    expect(screen.getByTestId('webapps-Banner-component')).toBeDefined();
    expect(screen.getByText(/this is the banner for testing/i)).toBeDefined();
});

test('Banner Component Renders as NavLink', () => {
    render(<BrowserRouter><Banner to="/test" data-testid="webapps-BannerNavLink-component">This is the banner for testing a NavLink</Banner></BrowserRouter>);

    expect(screen.getByTestId('webapps-BannerNavLink-component')).toBeDefined();
    expect(screen.getByText(/this is the banner for testing a navlink/i)).toBeDefined();
});