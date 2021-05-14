import React from 'react';
import { render, screen } from '@testing-library/react';

import Loader from './Loader';

test('Loader Component Renders', () => {
    render(<Loader data-testid="webapps-Loader-component" />);

    expect(screen.getByTestId('webapps-Loader-component')).toBeDefined();
});