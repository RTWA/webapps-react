import React, { useState } from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import AzureGroupSearch from './AzureGroupSearch';
import { WebAppsUX } from '../Context/index';

const TestElement = () => {
    const [groupData, setGroupData] = useState([]);

    return (
        <WebAppsUX>
            <AzureGroupSearch
                data-testid="webapps-AzureGroupSearch-component"
                groupData={groupData}
                setData={setGroupData}
                id={0}
                name={0}
                saveChange={() => { }}
                accessToken="ABC"
            />
        </WebAppsUX>
    )
}

test('AzureGroupSearch Component Renders', async () => {
    render(<TestElement />);

    await waitFor(() => expect(screen.getByTestId('webapps-AzureGroupSearch-component')).toBeDefined());
});

test('AzureGroupSearch Component Show No Matches', async () => {
    render(<TestElement />);

    await waitFor(() => expect(screen.getByTestId('webapps-AzureGroupSearch-component')).toBeDefined());

    const input = screen.getByTestId('webapps-AzureGroupSearch-component');

    await act(async () => {
        fireEvent.change(input, { target: { value: 'Nope' } });
        await input.value === 'Nope';
    });
    await waitFor(() => expect(screen.getByText(/no matching groups found!/i)).toBeDefined());
});

test('AzureGroupSearch Component Shows Matches', async () => {
    render(<TestElement />);

    await waitFor(() => expect(screen.getByTestId('webapps-AzureGroupSearch-component')).toBeDefined());

    const input = screen.getByTestId('webapps-AzureGroupSearch-component');

    await act(async () => {
        fireEvent.change(input, { target: { value: 'example' } });
        await input.value === 'example';
    });
    await waitFor(() => expect(screen.getByText(/example group 1/i)).toBeDefined());
    expect(screen.getByText(/example group 2/i)).toBeDefined()
});

test('AzureGroupSearch Component Can Select A Match', async () => {
    render(<TestElement />);

    await waitFor(() => expect(screen.getByTestId('webapps-AzureGroupSearch-component')).toBeDefined());

    const input = screen.getByTestId('webapps-AzureGroupSearch-component');

    await act(async () => {
        fireEvent.change(input, { target: { value: 'Example group 1' } });
        await input.value === 'Example group 1';
    });
    await waitFor(() => expect(screen.getByText(/example group 1/i)).toBeDefined());

    await act(async () => {
        fireEvent.click(screen.getByText(/example group 1/i));
    });
    await waitFor(() => expect(screen.queryByRole('list')).toBeNull());
});

test('AzureGroupSearch Component Can Select A Match with Keyboard', async () => {
    render(<TestElement />);

    await waitFor(() => expect(screen.getByTestId('webapps-AzureGroupSearch-component')).toBeDefined());

    const input = screen.getByTestId('webapps-AzureGroupSearch-component');

    await act(async () => {
        fireEvent.change(input, { target: { value: 'example' } });
        await input.value === 'example';
    });
    await waitFor(() => expect(screen.getByText(/example group 1/i)).toBeDefined());
    expect(screen.getByText(/example group 2/i)).toBeDefined()

    await act(async () => {
        fireEvent.keyDown(input,
            {
                key: 'ArrowDown',
                code: 'ArrowDown',
                keyCode: 40,
                charCode: 40,
            });
    });
    await waitFor(() => expect(screen.getByText(/example group 2/i).classList.contains('bg-gray-100')).toBe(true));

    await act(async () => {
        fireEvent.keyDown(input,
            {
                key: 'ArrowDown',
                code: 'ArrowDown',
                keyCode: 40,
                charCode: 40,
            });
    });
    await waitFor(() => expect(screen.getByText(/example group 2/i).classList.contains('bg-gray-100')).toBe(true));

    await act(async () => {
        fireEvent.keyDown(input,
            {
                key: 'ArrowUp',
                code: 'ArrowUp',
                keyCode: 38,
                charCode: 38,
            });
    });
    await waitFor(() => expect(screen.getByText(/example group 1/i).classList.contains('bg-gray-100')).toBe(true));

    await act(async () => {
        fireEvent.keyDown(input,
            {
                key: 'ArrowUp',
                code: 'ArrowUp',
                keyCode: 38,
                charCode: 38,
            });
    });
    await waitFor(() => expect(screen.getByText(/example group 1/i).classList.contains('bg-gray-100')).toBe(true));

    await act(async () => {
        fireEvent.keyDown(input,
            {
                key: 'Enter',
                code: 'Enter',
                keyCode: 13,
                charCode: 13,
            });
    });
    await waitFor(() => expect(screen.queryByRole('list')).toBeNull());
});

test('AzureGroupSearch Component Receives Error', async () => {
    render(<TestElement />);

    await waitFor(() => expect(screen.getByTestId('webapps-AzureGroupSearch-component')).toBeDefined());

    const input = screen.getByTestId('webapps-AzureGroupSearch-component');

    await act(async () => {
        fireEvent.change(input, { target: { value: 'Error' } });
        await input.value === 'Error';
    });
    await waitFor(() => expect(screen.getByText(/no matching groups found!/i)).toBeDefined());
});