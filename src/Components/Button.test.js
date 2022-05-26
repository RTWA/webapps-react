import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import Button from './Button';
import { WebAppsUX } from '../Context/index';
import { BrowserRouter } from 'react-router-dom';

test('Default Button Component Renders', async () => {
    render(<WebAppsUX><Button data-testid="webapps-Button-component">Button Test</Button></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Button-component')).toBeDefined());
});

test('Outline Button Component Renders', async () => {
    render(<WebAppsUX><Button data-testid="webapps-Button-Outline-component" type="outline">Outline Button Test</Button></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Button-Outline-component')).toBeDefined());
});

test('Ghost Button Component Renders', async () => {
    render(<WebAppsUX><Button data-testid="webapps-Button-Ghost-component" type="ghost">Ghost Button Test</Button></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Button-Ghost-component')).toBeDefined());
});

test('Link Button Component Renders', async () => {
    render(<WebAppsUX><Button data-testid="webapps-Button-Link-component" type="link">Link Button Test</Button></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Button-Link-component')).toBeDefined());
});

test('Small Button Component Renders', async () => {
    render(<WebAppsUX><Button data-testid="webapps-Button-Small-component" size="small">Small Button Test</Button></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Button-Small-component')).toBeDefined());
});

test('Large Button Component Renders', async () => {
    render(<WebAppsUX><Button data-testid="webapps-Button-Large-component" size="large">Large Button Test</Button></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Button-Large-component')).toBeDefined());
});

test('NoPadding Button Component Renders', async () => {
    render(<WebAppsUX><Button data-testid="webapps-Button-NoPadding-component" padding={false}>NoPadding Button Test</Button></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Button-NoPadding-component')).toBeDefined());
});

test('Rounded Button Component Renders', async () => {
    render(<WebAppsUX><Button data-testid="webapps-Button-Rounded-component" rounded>Rounded Button Test</Button></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Button-Rounded-component')).toBeDefined());
});

test('Square Button Component Renders', async () => {
    render(<WebAppsUX><Button data-testid="webapps-Button-Square-component" square color="green">Square Button Test</Button></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Button-Square-component')).toBeDefined());
});

test('NavLink Button Component Renders', async () => {
    render(<WebAppsUX><BrowserRouter><Button data-testid="webapps-Button-NavLink-component" to="/test">NavLink Button Test</Button></BrowserRouter></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-Button-NavLink-component')).toBeDefined());
});