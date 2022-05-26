import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Link from './Link';
import { act } from 'react-dom/test-utils';

const mockCallback = jest.fn();

test('Link Component Renders', () => {
    render(<Link data-testid="webapps-Link-component" href="#" />);

    expect(screen.getByTestId('webapps-Link-component')).toBeDefined();
});

test('Link Component Renders with Blank target', () => {
    render(<Link data-testid="webapps-Link-component" href="#" target="_blank" />);

    expect(screen.getByTestId('webapps-Link-component')).toBeDefined();
});

test('Link Component handles Click', async () => {
    render(<Link data-testid="webapps-Link-component" onClick={mockCallback} />);

    expect(screen.getByTestId('webapps-Link-component')).toBeDefined();

    await act(async () => {
        fireEvent.click(screen.getByTestId('webapps-Link-component'));
    });
    await waitFor(() => {
        expect(mockCallback.mock.calls.length).toBe(1);
    })
});