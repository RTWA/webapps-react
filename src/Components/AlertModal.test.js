import React from 'react';
import { render, screen } from '@testing-library/react';

import AlertModal from './AlertModal';

test('AlertModal Component Renders', async () => {
    render(<AlertModal data-testid="webapps-AlertModal-component" />);

    expect(screen.getByTestId('webapps-AlertModal-component')).toBeDefined();
    expect(screen.getAllByText(/are you sure?/i)).toBeDefined();
    expect(screen.getByRole('button', { name: /yes/i })).toBeDefined();
});