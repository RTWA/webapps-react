import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import ConfirmDeleteButton from './ConfirmDeleteButton';

test('ConfirmDeleteButton Component Renders', async () => {
    render(<ConfirmDeleteButton data-testid="webapps-ConfirmDeleteButton-component" />);

    expect(screen.getByTestId('webapps-ConfirmDeleteButton-component')).toBeDefined();
    expect(screen.getByText(/delete/i)).toBeDefined();

    await act(async () => {
        fireEvent.click(screen.getByText(/delete/i));
    });
    await waitFor(() =>
        screen.getByText(/delete - are you sure?/i)
    );
    
    expect(screen.getByText(/delete - are you sure?/i)).toBeDefined();
});