import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import GridSelect from './GridSelect';
import { WebAppsUX } from '../Context';

const mockCallback = jest.fn();

const options = [
    {
        value: 'light-blue',
        object: 'Blue',
        selected: true,
    },
    {
        value: 'red',
        object: 'Red',
        selected: false,
    },
    {
        value: 'lime',
        object: 'Green',
        selected: false,
    },
]

test('GridSelect Component Renders', async () => {
    render(<WebAppsUX><GridSelect data-testid="webapps-GridSelect-component" options={options} onSelect={mockCallback} label="this is the label" helpText="this is helpText" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-GridSelect-component')).toBeDefined());
    expect(screen.getByText(/this is the label/i)).toBeDefined();
    expect(screen.getByText(/this is helptext/i)).toBeDefined();
});

test('GridSelect Component handles Click', async () => {
    render(<WebAppsUX><GridSelect data-testid="webapps-GridSelect-component" options={options} onSelect={mockCallback} label="this is the label" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-GridSelect-component')).toBeDefined());
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