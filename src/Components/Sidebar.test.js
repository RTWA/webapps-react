import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { WebAppsUX } from '../Context/index';

import Sidebar from './Sidebar';

test('Sidebar Component Renders', async () => {
    render(<WebAppsUX><BrowserRouter><Sidebar data-testid="sidebar" /></BrowserRouter></WebAppsUX>);
    expect(screen.getByTestId('sidebar')).toBeDefined();

    const navigation = screen.getByRole('navigation');
    await waitFor(() => screen.getByRole('link', { name: /nav item/i }));

    expect(within(navigation).getByRole('link', { name: /nav item/i })).toBeDefined();
    expect(within(navigation).getByRole('heading', { name: /nav title/i })).toBeDefined();
    expect(within(navigation).getByRole('link', { name: /nav dropdown/i })).toBeDefined();

    await act(async () => {
        fireEvent.click(within(navigation).getByRole('link', { name: /nav dropdown/i }))
    });
    await waitFor(() => {
        within(navigation).getByRole('link', { name: /nav child/i })
    });
    expect(within(navigation).getByRole('link', { name: /nav child/i })).toBeDefined();
});