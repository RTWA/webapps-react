import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import DataSuggest from './DataSuggest';
import { WebAppsUX } from '../Context/index';

const data = [
    {
        value: 1,
        label: 'test item 1',
    },
    {
        value: 2,
        label: 'test item 2',
    }
]

test('DataSuggest Component Renders', async () => {
    render(<WebAppsUX><DataSuggest data-testid="webapps-DataSuggest-component" data={data} /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-DataSuggest-component')).toBeDefined());
});

test('DataSuggest Component Show No Matches', async () => {
    render(<WebAppsUX><DataSuggest data-testid="webapps-DataSuggest-component" data={data} /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-DataSuggest-component')).toBeDefined());

    const input = screen.getByTestId('webapps-DataSuggest-component');

    await act(async () => {
        fireEvent.change(input, { target: { value: 'Item that doesn\t exist' } });
        await input.value === 'Item that doesn\t exist';
    });
    await waitFor(() => expect(screen.getByText(/no matching results found!/i)).toBeDefined());
});

test('DataSuggest Component Shows Matches', async () => {
    render(<WebAppsUX><DataSuggest data-testid="webapps-DataSuggest-component" data={data} limit={2} /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-DataSuggest-component')).toBeDefined());

    const input = screen.getByTestId('webapps-DataSuggest-component');

    await act(async () => {
        fireEvent.change(input, { target: { value: 'test item' } });
        await input.value === 'test item';
    });
    await waitFor(() => expect(screen.getByText(/test item 1/i)).toBeDefined());
    expect(screen.getByText(/test item 2/i)).toBeDefined()
});

test('DataSuggest Component Can Select A Match', async () => {
    render(<WebAppsUX><DataSuggest data-testid="webapps-DataSuggest-component" data={data} /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-DataSuggest-component')).toBeDefined());

    const input = screen.getByTestId('webapps-DataSuggest-component');

    await act(async () => {
        fireEvent.change(input, { target: { value: 'test item 1' } });
        await input.value === 'test item 1';
    });
    await waitFor(() => expect(screen.getByText(/test item 1/i)).toBeDefined());

    await act(async () => {
        fireEvent.click(screen.getByRole('listitem'));
    });
    await waitFor(() => expect(screen.queryByRole('list')).toBeNull());
});

test('DataSuggest Component Can Select A Match with Keyboard', async () => {
    render(<WebAppsUX><DataSuggest data-testid="webapps-DataSuggest-component" data={data} /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-DataSuggest-component')).toBeDefined());

    const input = screen.getByTestId('webapps-DataSuggest-component');

    await act(async () => {
        fireEvent.change(input, { target: { value: 'test item' } });
        await input.value === 'test item';
    });
    await waitFor(() => expect(screen.getByText(/test item 1/i)).toBeDefined());
    expect(screen.getByText(/test item 2/i)).toBeDefined()

    await act(async () => {
        fireEvent.keyDown(input,
            {
                key: 'ArrowDown',
                code: 'ArrowDown',
                keyCode: 40,
                charCode: 40,
            });
    });
    await waitFor(() => expect(screen.getByText(/test item 2/i).classList.contains('bg-gray-100')).toBe(true));

    await act(async () => {
        fireEvent.keyDown(input,
            {
                key: 'ArrowDown',
                code: 'ArrowDown',
                keyCode: 40,
                charCode: 40,
            });
    });
    await waitFor(() => expect(screen.getByText(/test item 2/i).classList.contains('bg-gray-100')).toBe(true));

    await act(async () => {
        fireEvent.keyDown(input,
            {
                key: 'ArrowUp',
                code: 'ArrowUp',
                keyCode: 38,
                charCode: 38,
            });
    });
    await waitFor(() => expect(screen.getByText(/test item 1/i).classList.contains('bg-gray-100')).toBe(true));

    await act(async () => {
        fireEvent.keyDown(input,
            {
                key: 'ArrowUp',
                code: 'ArrowUp',
                keyCode: 38,
                charCode: 38,
            });
    });
    await waitFor(() => expect(screen.getByText(/test item 1/i).classList.contains('bg-gray-100')).toBe(true));

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