import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../../__mocks__/server';

import { WebAppsUX } from './WebAppsUX';
import CoreError from '../../Errors/CoreError';

test('WebAppsUX Component Renders', async () => {
    render(<CoreError><WebAppsUX><h1>Loaded</h1></WebAppsUX></CoreError>);

    await waitFor(() => expect(screen.getByRole('heading', { name: /loaded/i })).toBeDefined());
});

test('WebAppsUX Component Falls to CoreError', async () => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => { });

    server.use(
        rest.post('/api/setting', (req, res, ctx) => {
            return res(
                ctx.status(500),
                ctx.json({
                    message: "Test Failed",
                })

            )
        }),
    )
    render(<CoreError><WebAppsUX><h1>Loaded</h1></WebAppsUX></CoreError>);
    await waitFor(() => expect(screen.getByRole('heading', { name: /a serious error has occurred!/i })).toBeDefined());
    expect(screen.getByText(/error: test failed/i)).toBeDefined();
    expect(screen.getByRole('button', { name: /reload page/i })).toBeDefined();

    spy.mockRestore();
});