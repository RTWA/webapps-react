import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { WebAppsUX } from '../Context/index';

import Input from './Input';

test('Input Component Renders', async () => {
    render(<WebAppsUX><Input data-testid="webapps-Input-component" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Input-component')).toBeDefined());
});

test('Input Component in Saving State', async () => {
    render(<WebAppsUX><Input data-testid="webapps-Input-Saving-component" state="saving" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Input-Saving-component')).toBeDefined());
});

test('Input Component in Error State', async () => {
    render(<WebAppsUX><Input data-testid="webapps-Input-Error-component" state="error" error="this is the error" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Input-Error-component')).toBeDefined());
    expect(screen.getByText(/this is the error/i)).toBeDefined();
});

test('Input Component in Saved State', async () => {
    render(<WebAppsUX><Input data-testid="webapps-Input-Saved-component" state="saved" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Input-Saved-component')).toBeDefined());
});

test('Input Component with an Action on the Right', async () => {
    render(<WebAppsUX><Input data-testid="webapps-Input-RightAction-component" action={<span>Test Action</span>} /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Input-RightAction-component')).toBeDefined());
    expect(screen.getByText(/test action/i)).toBeDefined();
});

test('Input Component with an Action on the Left', async () => {
    render(<WebAppsUX><Input data-testid="webapps-Input-LeftAction-component" actionLocation="left" action={<span>Left Action</span>} /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Input-LeftAction-component')).toBeDefined());
    expect(screen.getByText(/left action/i)).toBeDefined();
});

test('Input Component with an Action with No Location', async () => {
    render(<WebAppsUX><Input data-testid="webapps-Input-NLAction-component" actionLocation="none" action={<span>nl Action</span>} /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Input-NLAction-component')).toBeDefined());
    expect(screen.getByText(/nl action/i)).toBeDefined();
});

test('Input Component with HelpText and Label', async () => {
    render(<WebAppsUX><Input data-testid="webapps-Input-HelpLabel-component" helpText="this is help text" label="this is label" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Input-HelpLabel-component')).toBeDefined());
    expect(screen.getByText(/this is help text/i)).toBeDefined();
    expect(screen.getByText(/this is label/i)).toBeDefined();
});