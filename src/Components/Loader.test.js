import React from 'react';
import { render, screen } from '@testing-library/react';

import Loader from './Loader';

test('Loader Component Renders', () => {
    render(<Loader />);

    expect(screen.getByText('Loading')).toBeDefined();
});

test('Loader Component Renders with Left Align', () => {
    render(<Loader alignment="left" />);

    expect(screen.getByText('Loading')).toBeDefined();
});

test('Loader Component Renders with Right Align', () => {
    render(<Loader alignment="right" />);

    expect(screen.getByText('Loading')).toBeDefined();
});