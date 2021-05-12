import React from 'react';
import { render, screen } from '@testing-library/react';

import Banner from './Banner';

test('Banner Component Renders', () => {
    render(<Banner data-testid="webapps-Banner-component">This is the banner for testing</Banner>);

    expect(screen.getByTestId('webapps-Banner-component')).toBeDefined();
    expect(screen.getByText(/this is the banner for testing/i)).toBeDefined();
});