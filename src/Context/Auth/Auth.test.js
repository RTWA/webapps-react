import React, { useContext, useState } from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../../__mocks__/server';

import * as mockData from '../../../__mocks__/mockData';

import Auth from './Auth';
import CoreError from '../../Errors/CoreError';
import { AuthContext } from '.';

describe('Auth Context', () => {
    test('Renders Children', async () => {
        render(<CoreError><Auth><h1>Loaded</h1></Auth></CoreError>);
        await waitFor(() => expect(screen.getByRole('heading', { name: /loaded/i })).toBeDefined());
    });

    test('Cannot Login with Invalid Data', async () => {
        render(<CoreError><Auth><LoginFormMock /></Auth></CoreError>);
        await waitFor(() => expect(screen.getByRole('button', { name: /sign in with invalid data/i })).toBeDefined());
        expect(screen.getByRole('button', { name: /sign in with valid data/i })).toBeDefined();

        await act(async () => {
            fireEvent.click(screen.getByRole('button', { name: /sign in with invalid data/i }))
        });
        await waitFor(() => expect(screen.getByText(/the given data was invalid./i)).toBeDefined());
    });

    test('Can Login with Valid Data', async () => {
        render(<CoreError><Auth><LoginFormMock /></Auth></CoreError>);
        await waitFor(() => expect(screen.getByRole('button', { name: /sign in with invalid data/i })).toBeDefined());
        expect(screen.getByRole('button', { name: /sign in with valid data/i })).toBeDefined();

        await act(async () => {
            fireEvent.click(screen.getByRole('button', { name: /sign in with valid data/i }))
        });
        await waitFor(() => expect(screen.getByRole('heading', { name: /logged in/i })).toBeDefined());
    });

    test('Can call checkAuthentication without Error', async () => {
        render(<CoreError><Auth><LoginFormMock /></Auth></CoreError>);
        await waitFor(() => expect(screen.getByRole('heading', { name: /logged in/i })).toBeDefined());
        expect(screen.getByRole('button', { name: /check authentication/i })).toBeDefined();

        await act(async () => {
            fireEvent.click(screen.getByRole('button', { name: /check authentication/i }))
        });
    });

    test('Can use setUser', async () => {
        render(<CoreError><Auth><LoginFormMock /></Auth></CoreError>);
        await waitFor(() => expect(screen.getByText(mockData.User.username)).toBeDefined());
        expect(screen.getByRole('button', { name: /change username/i })).toBeDefined();

        await act(async () => {
            fireEvent.click(screen.getByRole('button', { name: /change username/i }))
        });
        await waitFor(() => expect(screen.getByText('fakeusername')).toBeDefined());
    });

    test('Can checkPermission with a valid permission', async () => {
        render(<CoreError><Auth><LoginFormMock /></Auth></CoreError>);
        await waitFor(() => expect(screen.getByText(mockData.User.username)).toBeDefined());
        expect(screen.getByRole('button', { name: /check permission valid/i })).toBeDefined();

        await act(async () => {
            fireEvent.click(screen.getByRole('button', { name: /check permission valid/i }))
        });
        await waitFor(() => expect(screen.getByText(/true/i)).toBeDefined());
    });

    test('Can checkPermission with an invalid permission', async () => {
        const spy = jest.spyOn(console, 'error');
        spy.mockImplementation(() => { });

        render(<CoreError><Auth><LoginFormMock /></Auth></CoreError>);
        await waitFor(() => expect(screen.getByText(mockData.User.username)).toBeDefined());
        expect(screen.getByRole('button', { name: /check permission invalid/i })).toBeDefined();

        await act(async () => {
            fireEvent.click(screen.getByRole('button', { name: /check permission invalid/i }))
        });
        await waitFor(() => expect(screen.getByRole('heading', { name: /a serious error has occurred!/i })).toBeDefined());
        expect(screen.getByText(/error: an unexpected error occurred while processing your request./i)).toBeDefined();
        expect(screen.getByRole('button', { name: /reload page/i })).toBeDefined();

        spy.mockRestore();
    });

    test('Can checkGroup with a valid group', async () => {
        render(<CoreError><Auth><LoginFormMock /></Auth></CoreError>);
        await waitFor(() => expect(screen.getByText(mockData.User.username)).toBeDefined());
        expect(screen.getByRole('button', { name: /check group valid/i })).toBeDefined();

        await act(async () => {
            fireEvent.click(screen.getByRole('button', { name: /check group valid/i }))
        });
        await waitFor(() => expect(screen.getByText(/true/i)).toBeDefined());
    });

    test('Can checkGroup with an invalid group', async () => {
        const spy = jest.spyOn(console, 'error');
        spy.mockImplementation(() => { });

        render(<CoreError><Auth><LoginFormMock /></Auth></CoreError>);
        await waitFor(() => expect(screen.getByText(mockData.User.username)).toBeDefined());
        expect(screen.getByRole('button', { name: /check group invalid/i })).toBeDefined();

        await act(async () => {
            fireEvent.click(screen.getByRole('button', { name: /check group invalid/i }))
        });
        await waitFor(() => expect(screen.getByRole('heading', { name: /a serious error has occurred!/i })).toBeDefined());
        expect(screen.getByText(/error: an unexpected error occurred while processing your request./i)).toBeDefined();
        expect(screen.getByRole('button', { name: /reload page/i })).toBeDefined();

        spy.mockRestore();
    });

    test('Can set a valid preference', async () => {
        render(<CoreError><Auth><LoginFormMock /></Auth></CoreError>);
        await waitFor(() => expect(screen.getByText(mockData.User.username)).toBeDefined());
        expect(screen.getByRole('button', { name: /set valid preference/i })).toBeDefined();

        await act(async () => {
            fireEvent.click(screen.getByRole('button', { name: /set valid preference/i }))
        });
        await waitFor(() => expect(screen.getByText(/{"valid":"value"}/i)).toBeDefined());
    });

    test('Cannot set an invalid prefernce', async () => {
        const spy = jest.spyOn(console, 'error');
        spy.mockImplementation(() => { });

        render(<CoreError><Auth><LoginFormMock /></Auth></CoreError>);
        await waitFor(() => expect(screen.getByText(mockData.User.username)).toBeDefined());
        expect(screen.getByRole('button', { name: /set invalid preference/i })).toBeDefined();

        await act(async () => {
            fireEvent.click(screen.getByRole('button', { name: /set invalid preference/i }))
        });
        await waitFor(() => expect(screen.getByRole('heading', { name: /a serious error has occurred!/i })).toBeDefined());
        expect(screen.getByText(/error: an unexpected error occurred while processing your request./i)).toBeDefined();
        expect(screen.getByRole('button', { name: /reload page/i })).toBeDefined();

        spy.mockRestore();
    });

    test('Can Logout', async () => {
        render(<CoreError><Auth><LoginFormMock /></Auth></CoreError>);
        await waitFor(() => expect(screen.getByRole('heading', { name: /logged in/i })).toBeDefined());
        expect(screen.getByRole('button', { name: /sign out/i })).toBeDefined();

        await act(async () => {
            fireEvent.click(screen.getByRole('button', { name: /sign out/i }))
        });
        await waitFor(() => expect(screen.getByRole('button', { name: /sign in with invalid data/i })).toBeDefined());
    });

    test('checkAuthentication Falls to CoreError', async () => {
        const spy = jest.spyOn(console, 'error');
        spy.mockImplementation(() => { });

        server.use(
            rest.get('/api/user', (req, res, ctx) => {
                return res(
                    ctx.status(500),
                    ctx.json({
                        message: "Test Failed",
                    })

                )
            }),
        )
        render(<CoreError><Auth><LoginFormMock /></Auth></CoreError>);
        await waitFor(() => expect(screen.getByRole('heading', { name: /a serious error has occurred!/i })).toBeDefined());
        expect(screen.getByText(/error: test failed/i)).toBeDefined();
        expect(screen.getByRole('button', { name: /reload page/i })).toBeDefined();

        spy.mockRestore();
    });
});

const LoginFormMock = () => {
    const [message, setMessage] = useState();
    const {
        authenticated,
        checkAuthentication,
        checkGroup,
        checkPermission,
        preferences,
        user,
        setPreference,
        setUser,
        signIn,
        signOut,
    } = useContext(AuthContext);

    const doInvalidSignIn = async () => {
        await signIn('invalid', 'incorrect')
            .catch(error => setMessage(error.data?.message));
    }

    const doValidSignIn = async () => {
        await signIn(mockData.User.username, mockData.User.password)
            .then(() => setMessage());
    }

    if (authenticated) {
        return (
            <>
                <h1>Logged in</h1>
                <button onClick={checkAuthentication}>Check Authentication</button>
                <button onClick={signOut}>Sign Out</button>
                <p>{user?.username}</p>
                <button onClick={() => { user.username = 'fakeusername'; setUser({ ...user }, true) }}>Change Username</button>
                <button onClick={() => { setMessage(); checkPermission('admin.access').then(json => setMessage(json)); }}>Check Permission Valid</button>
                <button onClick={() => { setMessage(); checkPermission('fail'); }}>Check Permission Invalid</button>
                <button onClick={() => { setMessage(); checkGroup('Administrators').then(json => setMessage(json)); }}>Check Group Valid</button>
                <button onClick={() => { setMessage(); checkGroup('Fail'); }}>Check Group Invalid</button>
                <button onClick={() => { setMessage(); setPreference('valid', 'value').then(() => setMessage(JSON.stringify(preferences))); }}>Set Valid Preference</button>
                <button onClick={() => { setMessage(); setPreference('not_valid', 'value'); }}>Set Invalid Preference</button>
                {
                    (message)
                        ? <p>{message.toString()}</p>
                        : null
                }
            </>
        )
    }

    return (
        <>
            <button onClick={doInvalidSignIn}>Sign In with Invalid data</button>
            <button onClick={doValidSignIn}>Sign In with Valid data</button>
            {
                (message)
                    ? <p>{message}</p>
                    : null
            }
        </>
    )
}