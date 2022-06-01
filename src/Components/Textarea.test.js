import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { WebAppsUX } from '../Context/index';

import Textarea from './Textarea';

test('Textarea Component Renders', async () => {
    render(<WebAppsUX><Textarea data-testid="webapps-Textarea-component" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Textarea-component')).toBeDefined());
});

test('Textarea Component in Saving State', async () => {
    render(<WebAppsUX><Textarea data-testid="webapps-Textarea-Saving-component" state="saving" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Textarea-Saving-component')).toBeDefined());
});

test('Textarea Component in Error State', async () => {
    render(<WebAppsUX><Textarea data-testid="webapps-Textarea-Error-component" state="error" error="this is the error" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Textarea-Error-component')).toBeDefined());
    expect(screen.getByText(/this is the error/i)).toBeDefined();
});

test('Textarea Component in Saved State', async () => {
    render(<WebAppsUX><Textarea data-testid="webapps-Textarea-Saved-component" state="saved" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Textarea-Saved-component')).toBeDefined());
});

test('Textarea Component with an Action on the Right', async () => {
    render(<WebAppsUX><Textarea data-testid="webapps-Textarea-RightAction-component" action={<span>Test Action</span>} /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Textarea-RightAction-component')).toBeDefined());
    expect(screen.getByText(/test action/i)).toBeDefined();
});

test('Textarea Component with an Action on the Left', async () => {
    render(<WebAppsUX><Textarea data-testid="webapps-Textarea-LeftAction-component" actionLocation="left" action={<span>Left Action</span>} /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Textarea-LeftAction-component')).toBeDefined());
    expect(screen.getByText(/left action/i)).toBeDefined();
});

test('Textarea Component with an Action with No Location', async () => {
    render(<WebAppsUX><Textarea data-testid="webapps-Textarea-NLAction-component" actionLocation="none" action={<span>nl Action</span>} /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Textarea-NLAction-component')).toBeDefined());
    expect(screen.getByText(/nl action/i)).toBeDefined();
});

test('Textarea Component with HelpText and Label', async () => {
    render(<WebAppsUX><Textarea data-testid="webapps-Textarea-HelpLabel-component" helpText="this is help text" label="this is label" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Textarea-HelpLabel-component')).toBeDefined());
    expect(screen.getByText(/this is help text/i)).toBeDefined();
    expect(screen.getByText(/this is label/i)).toBeDefined();
});