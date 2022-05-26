import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import UserSuggest from './UserSuggest';
import { WebAppsUX } from '../Context/index';

const users = [
    {
        id: 1,
        name: 'person 1',
        username: 'person1',
        email: 'person1@email',
    },
    {
        id: 2,
        name: 'person 2',
        username: 'person2',
        email: 'person2@email',
    }
]

test('UserSuggest Component Renders', async () => {
    render(<WebAppsUX><UserSuggest data-testid="webapps-UserSuggest-component" users={users} /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-UserSuggest-component')).toBeDefined());
});

test('UserSuggest Component Show No Matches', async () => {
    render(<WebAppsUX><UserSuggest data-testid="webapps-UserSuggest-component" users={users} /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-UserSuggest-component')).toBeDefined());

    const input = screen.getByTestId('webapps-UserSuggest-component');

    await act(async () => {
        fireEvent.change(input, { target: { value: 'User that doesn\t exist' } });
        await input.value === 'User that doesn\t exist';
    });
    await waitFor(() => expect(screen.getByText(/no matching users found!/i)).toBeDefined());
});

test('UserSuggest Component Shows Matches', async () => {
    render(<WebAppsUX><UserSuggest data-testid="webapps-UserSuggest-component" users={users} limit={2} /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-UserSuggest-component')).toBeDefined());

    const input = screen.getByTestId('webapps-UserSuggest-component');

    await act(async () => {
        fireEvent.change(input, { target: { value: 'person' } });
        await input.value === 'person';
    });
    await waitFor(() => expect(screen.getByText(/person 1/i)).toBeDefined());
    expect(screen.getByText(/person 2/i)).toBeDefined()
});

test('UserSuggest Component Can Select A Match', async () => {
    render(<WebAppsUX><UserSuggest data-testid="webapps-UserSuggest-component" users={users} /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-UserSuggest-component')).toBeDefined());

    const input = screen.getByTestId('webapps-UserSuggest-component');

    await act(async () => {
        fireEvent.change(input, { target: { value: 'person 1' } });
        await input.value === 'person 1';
    });
    await waitFor(() => expect(screen.getByText(/person 1/i)).toBeDefined());

    await act(async () => {
        fireEvent.click(screen.getByRole('listitem'));
    });
    await waitFor(() => expect(screen.queryByRole('list')).toBeNull());
});

test('UserSuggest Component Can Select A Match with Keyboard', async () => {
    render(<WebAppsUX><UserSuggest data-testid="webapps-UserSuggest-component" users={users} photos={false} /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-UserSuggest-component')).toBeDefined());

    const input = screen.getByTestId('webapps-UserSuggest-component');

    await act(async () => {
        fireEvent.change(input, { target: { value: 'person' } });
        await input.value === 'person';
    });
    await waitFor(() => expect(screen.getByText(/person 1/i)).toBeDefined());
    expect(screen.getByText(/person 2/i)).toBeDefined()

    await act(async () => {
        fireEvent.keyDown(input,
            {
                key: 'ArrowDown',
                code: 'ArrowDown',
                keyCode: 40,
                charCode: 40,
            });
    });
    await waitFor(() => expect(screen.getByText(/person 2/i).parentElement.classList.contains('bg-gray-100')).toBe(true));

    await act(async () => {
        fireEvent.keyDown(input,
            {
                key: 'ArrowDown',
                code: 'ArrowDown',
                keyCode: 40,
                charCode: 40,
            });
    });
    await waitFor(() => expect(screen.getByText(/person 2/i).parentElement.classList.contains('bg-gray-100')).toBe(true));

    await act(async () => {
        fireEvent.keyDown(input,
            {
                key: 'ArrowUp',
                code: 'ArrowUp',
                keyCode: 38,
                charCode: 38,
            });
    });
    await waitFor(() => expect(screen.getByText(/person 1/i).parentElement.classList.contains('bg-gray-100')).toBe(true));

    await act(async () => {
        fireEvent.keyDown(input,
            {
                key: 'ArrowUp',
                code: 'ArrowUp',
                keyCode: 38,
                charCode: 38,
            });
    });
    await waitFor(() => expect(screen.getByText(/person 1/i).parentElement.classList.contains('bg-gray-100')).toBe(true));

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