import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import ColorGridSelect from './ColorGridSelect';
import { WebAppsUX } from '../Context';

const mockCallback = jest.fn();

const colors = [
    {
        value: 'light-blue',
        bgClasses: 'bg-light-blue-600 dark:bg-light-blue-500',
        name: 'Blue',
        selected: true,
    },
    {
        value: 'red',
        bgClasses: 'bg-red-600 dark:bg-red-500',
        name: 'Red',
        selected: false,
    },
    {
        value: 'lime',
        bgClasses: 'bg-lime-600 dark:bg-lime-500',
        name: 'Green',
        selected: false,
    },
]

test('ColorGridSelect Component Renders', async () => {
    render(<WebAppsUX><ColorGridSelect data-testid="webapps-ColorGridSelect-component" colors={colors} onSelect={mockCallback} label="this is the label" helpText="this is helpText" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-ColorGridSelect-component')).toBeDefined());
    expect(screen.getByText(/this is the label/i)).toBeDefined();
    expect(screen.getByText(/this is helptext/i)).toBeDefined();
});

test('ColorGridSelect Component handles Click', async () => {
    render(<WebAppsUX><ColorGridSelect data-testid="webapps-ColorGridSelect-component" colors={colors} onSelect={mockCallback} label="this is the label" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-ColorGridSelect-component')).toBeDefined());
    expect(screen.getByText(/red/i)).toBeDefined();

    await act(async () => {
        fireEvent.click(screen.getByText(/red/i))
    });    
    expect(mockCallback.mock.calls.length).toBe(1);

    await act(async () => {
        fireEvent.click(screen.getByText(/blue/i))
    });    
    expect(mockCallback.mock.calls.length).toBe(2);
});