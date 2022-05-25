import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import ConfirmDeleteButton from './ConfirmDeleteButton';
import { WebAppsUX } from '../Context/index';

test('ConfirmDeleteButton Component Renders', async () => {
    render(<WebAppsUX><ConfirmDeleteButton data-testid="webapps-ConfirmDeleteButton-component" timeout={10} /></WebAppsUX>);

    expect(screen.getByTestId('webapps-ConfirmDeleteButton-component')).toBeDefined();
    expect(screen.getByText(/delete/i)).toBeDefined();

    await act(async () => {
        fireEvent.click(screen.getByText(/delete/i));
    });
    await waitFor(() => expect(screen.getByText(/delete - are you sure?/i)).toBeDefined());

    /* Wait for the timeout to clear */
    await waitFor(() => expect(screen.getByText("Delete")).toBeDefined());
});