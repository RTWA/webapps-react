import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { WebAppsUX } from '../Context/index';

import Select from './Select';

test('Select Component Renders', async () => {
    render(<WebAppsUX><Select data-testid="webapps-Select-component" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Select-component')).toBeDefined());
});

test('Select Component in Saving State', async () => {
    render(<WebAppsUX><Select data-testid="webapps-Select-Saving-component" state="saving" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Select-Saving-component')).toBeDefined());
});

test('Select Component in Error State', async () => {
    render(<WebAppsUX><Select data-testid="webapps-Select-Error-component" state="error" error="this is the error" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Select-Error-component')).toBeDefined());
    expect(screen.getByText(/this is the error/i)).toBeDefined();
});

test('Select Component in Saved State', async () => {
    render(<WebAppsUX><Select data-testid="webapps-Select-Saved-component" state="saved" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Select-Saved-component')).toBeDefined());
});

test('Select Component in Saving State on Left', async () => {
    render(<WebAppsUX><Select data-testid="webapps-Select-SavingLeft-component" state="saving" actionLocation="left" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Select-SavingLeft-component')).toBeDefined());
});

test('Select Component in Error State on Left', async () => {
    render(<WebAppsUX><Select data-testid="webapps-Select-ErrorLeft-component" state="error" error="this is the left error" actionLocation="left" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Select-ErrorLeft-component')).toBeDefined());
    expect(screen.getByText(/this is the left error/i)).toBeDefined();
});

test('Select Component in Saved State on Left', async () => {
    render(<WebAppsUX><Select data-testid="webapps-Select-SavedLeft-component" state="saved" actionLocation="left" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Select-SavedLeft-component')).toBeDefined());
});

test('Select Component with an Action on the Right', async () => {
    render(<WebAppsUX><Select data-testid="webapps-Select-RightAction-component" action={<span>Test Action</span>} /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Select-RightAction-component')).toBeDefined());
    expect(screen.getByText(/test action/i)).toBeDefined();
});

test('Select Component with an Action on the Left', async () => {
    render(<WebAppsUX><Select data-testid="webapps-Select-LeftAction-component" actionLocation="left" action={<span>Left Action</span>} /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Select-LeftAction-component')).toBeDefined());
    expect(screen.getByText(/left action/i)).toBeDefined();
});

test('Select Component with HelpText and Label', async () => {
    render(<WebAppsUX><Select data-testid="webapps-Select-HelpLabel-component" helpText="this is help text" label="this is label" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Select-HelpLabel-component')).toBeDefined());
    expect(screen.getByText(/this is help text/i)).toBeDefined();
    expect(screen.getByText(/this is label/i)).toBeDefined();
});