import React from 'react';
import { render, screen } from '@testing-library/react';

import ConfirmDeleteModal from './ConfirmDeleteModal';

test('ConfirmDeleteModal Component Renders', async () => {
    render(<ConfirmDeleteModal data-testid="webapps-ConfirmDeleteModal-component" />);

    expect(screen.getByTestId('webapps-ConfirmDeleteModal-component')).toBeDefined();
    expect(screen.getAllByText(/are you sure?/i)).toBeDefined();
    expect(screen.getByRole('button', { name: /yes/i })).toBeDefined();
});