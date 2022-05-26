import React, { useState } from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import ConfirmDeleteButton from './ConfirmDeleteButton';
import { WebAppsUX } from '../Context/index';

const DeletedTest = () => {
    const [deleted, setDeleted] = useState('nope');
    const doDelete = () => {
        setDeleted('yep');
    }

    return (
        <>
            <ConfirmDeleteButton data-testid="webapps-ConfirmDeleteButton-component" confirmText="are you sure?" onClick={doDelete} />
            <span>{deleted}</span>
        </>
    );
}

test('ConfirmDeleteButton Component Renders', async () => {
    render(<WebAppsUX><ConfirmDeleteButton data-testid="webapps-ConfirmDeleteButton-component" confirmText="are you sure?" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-ConfirmDeleteButton-component')).toBeDefined());
    expect(screen.getByText(/delete/i)).toBeDefined();

    await act(async () => {
        fireEvent.click(screen.getByText(/delete/i));
    });
    await waitFor(() => expect(screen.getByText(/are you sure?/i)).toBeDefined());

    /* Wait for the timeout to clear */
    await waitFor(() => expect(screen.getByText(/delete/i)).toBeDefined());
});

test('ConfirmDeleteButton Component actions onClick', async () => {
    render(<WebAppsUX><DeletedTest /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-ConfirmDeleteButton-component')).toBeDefined());
    expect(screen.getByText(/delete/i)).toBeDefined();
    expect(screen.getByText(/nope/i)).toBeDefined();

    await act(async () => {
        fireEvent.click(screen.getByText(/delete/i));
    });
    await waitFor(() => expect(screen.getByText(/are you sure?/i)).toBeDefined());

    await act(async () => {
        fireEvent.click(screen.getByText(/are you sure?/i));
    });
});