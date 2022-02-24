import React from 'react';
import { render, screen } from '@testing-library/react';

import Loader from './Loader';

test('Loader Component Renders', () => {
    render(<Loader />);

    expect(screen.getByText('Loading')).toBeDefined();
});