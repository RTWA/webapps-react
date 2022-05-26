import React, { useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { rest } from 'msw';
import { WebAppsUX, WebAppsUXContext } from '../Context/index';

import Sidebar from './Sidebar';
import { server } from '../../__mocks__/server';

const ToggleFullSidebar = () => {
    const { useNavigation } = useContext(WebAppsUXContext);
    const { navigation, setNavigation, toggleNavigation } = useNavigation;

    useEffect(() => {
        navigation.display_mode = 'side';
        navigation.opened = true;
        setNavigation({ ...navigation });
    }, []);

    return <button onClick={toggleNavigation}>Toggle Full Navigation</button>
}

const ToggleSidebar = () => {
    const { useNavigation } = useContext(WebAppsUXContext);
    const { navigation, setNavigation, toggleNavigation } = useNavigation;

    useEffect(() => {
        navigation.color_mode = 'dark';
        navigation.display_mode = 'overlay';
        navigation.opened = false;
        setNavigation({ ...navigation });
    }, []);

    return <button onClick={toggleNavigation}>Toggle Navigation</button>
}

test('Sidebar Component Renders', async () => {
    render(<WebAppsUX><BrowserRouter><Sidebar data-testid="sidebar" /></BrowserRouter></WebAppsUX>);
    await waitFor(() => expect(screen.getByTestId('sidebar')).toBeDefined());
    await waitFor(() => screen.getByRole('link', { name: /nav item/i }));
    expect(screen.getByRole('link', { name: /nav item/i })).toBeDefined();
});

test('Sidebar renders 2 NavItem\'s', async () => {
    render(<WebAppsUX><BrowserRouter><Sidebar data-testid="sidebar" /></BrowserRouter></WebAppsUX>);
    await waitFor(() => expect(screen.getByTestId('sidebar')).toBeDefined());

    const navigation = screen.getByRole('navigation');
    await waitFor(() => within(navigation).getByRole('link', { name: /nav item/i }));

    expect(within(navigation).getByRole('link', { name: /nav item/i })).toBeDefined();
    expect(within(navigation).getByRole('link', { name: /navitem coloured/i })).toBeDefined();
});

test('Sidebar renders Badge within NavItem', async () => {
    render(<WebAppsUX><BrowserRouter><Sidebar data-testid="sidebar" /></BrowserRouter></WebAppsUX>);
    await waitFor(() => expect(screen.getByTestId('sidebar')).toBeDefined());

    const navigation = screen.getByRole('navigation')
    await waitFor(() => within(navigation).getByRole('link', { name: /navitem coloured/i }));

    const link = within(navigation).getByRole('link', { name: /navitem coloured/i });
    expect(within(link).getByText(/badge/i)).toBeDefined();
});

test('Sidebar renders NavItem and handles Click event', async () => {
    render(<WebAppsUX><BrowserRouter><Sidebar data-testid="sidebar" /></BrowserRouter></WebAppsUX>);
    await waitFor(() => expect(screen.getByTestId('sidebar')).toBeDefined());

    const navigation = screen.getByRole('navigation');
    await waitFor(() => within(navigation).getByRole('link', { name: /navitem coloured/i }));

    await waitFor(() => {
        fireEvent.click(within(navigation).getByRole('link', { name: /navitem coloured/i }));
    });
    expect(within(navigation).getByRole('link', { name: /navitem coloured/i })).toBeDefined();
});

test('Sidebar renders NavDropdown', async () => {
    render(<WebAppsUX><BrowserRouter><Sidebar data-testid="sidebar" /></BrowserRouter></WebAppsUX>);
    await waitFor(() => expect(screen.getByTestId('sidebar')).toBeDefined());

    const navigation = screen.getByRole('navigation');
    await waitFor(() => within(navigation).getByRole('link', { name: /nav item/i }));
    expect(within(navigation).getByRole('link', { name: /nav dropdown/i })).toBeDefined();
});

test('Sidebar renders NavDropdown with Badge', async () => {
    render(<WebAppsUX><BrowserRouter><Sidebar data-testid="sidebar" /></BrowserRouter></WebAppsUX>);
    await waitFor(() => expect(screen.getByTestId('sidebar')).toBeDefined());

    const navigation = screen.getByRole('navigation');
    await waitFor(() => within(navigation).getByRole('link', { name: /nav item/i }));
    expect(within(navigation).getByRole('link', { name: /navdropdown coloured/i })).toBeDefined();

    const link = within(navigation).getByRole('link', { name: /navdropdown coloured/i });
    expect(within(link).getByText(/dropbadge/i)).toBeDefined();
});

test('Sidebar renders NavDropdown and opens on Click', async () => {
    render(<WebAppsUX><BrowserRouter><Sidebar data-testid="sidebar" /></BrowserRouter></WebAppsUX>);
    await waitFor(() => expect(screen.getByTestId('sidebar')).toBeDefined());

    const navigation = screen.getByRole('navigation');
    await waitFor(() => within(navigation).getByRole('link', { name: /nav item/i }));
    expect(within(navigation).getByRole('link', { name: /nav dropdown/i })).toBeDefined();

    await act(async () => {
        fireEvent.click(within(navigation).getByRole('link', { name: /nav dropdown/i }))
    });
    await waitFor(() => {
        within(navigation).getByRole('link', { name: /nav child/i })
    });
    expect(within(navigation).getByRole('link', { name: /nav child/i })).toBeDefined();
});

test('Sidebar renders and can be Toggled', async () => {
    render(<WebAppsUX><BrowserRouter><Sidebar data-testid="sidebar" /><ToggleFullSidebar /></BrowserRouter></WebAppsUX>);
    await waitFor(() => expect(screen.getByTestId('sidebar')).toBeDefined());

    const navigation = screen.getByRole('navigation');
    await waitFor(() => within(navigation).getByRole('link', { name: /nav item/i }));

    expect(screen.getByRole('button', { name: /toggle full navigation/i })).toBeDefined();

    await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /toggle full navigation/i }))
    });
    await waitFor(() => {
        expect(screen.getByTestId('sidebar').classList.contains('-ml-72')).toBe(true);
    });
});

test('Sidebar Overlay renders and can be Toggled', async () => {
    global.innerWidth = 200;
    render(<WebAppsUX><BrowserRouter><Sidebar data-testid="sidebar" /><ToggleSidebar /></BrowserRouter></WebAppsUX>);
    await waitFor(() => expect(screen.getByTestId('sidebar')).toBeDefined());

    const navigation = screen.getByRole('navigation');
    await waitFor(() => within(navigation).getByRole('link', { name: /nav item/i }));

    expect(screen.getByRole('button', { name: /toggle navigation/i })).toBeDefined();

    await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /toggle navigation/i }))
    });
    await waitFor(() => {
        expect(screen.getByTestId('sidebar').classList.contains('translate-x-0')).toBe(true);
    });
});

test('Sidebar Overlay renders NavDropdown with Colour and opens on Click', async () => {
    global.innerWidth = 200;
    render(<WebAppsUX><BrowserRouter><Sidebar data-testid="sidebar" /></BrowserRouter></WebAppsUX>);
    await waitFor(() => expect(screen.getByTestId('sidebar')).toBeDefined());

    const navigation = screen.getByRole('navigation');
    await waitFor(() => within(navigation).getByRole('link', { name: /nav item/i }));
    expect(within(navigation).getByRole('link', { name: /navdropdown coloured/i })).toBeDefined();

    await act(async () => {
        fireEvent.click(within(navigation).getByRole('link', { name: /navdropdown coloured/i }))
    });
    await waitFor(() => {
        within(navigation).getByRole('link', { name: /navchild coloured/i })
    });
    expect(within(navigation).getByRole('link', { name: /navchild coloured/i })).toBeDefined();

    const child = within(navigation).getByRole('link', { name: /navchild coloured/i });
    expect(within(child).getByText(/childbadge/i)).toBeDefined();
});

test('Sidebar Overlay renders NavChild and handles Click event', async () => {
    global.innerWidth = 200;
    render(<WebAppsUX><BrowserRouter><Sidebar data-testid="sidebar" /></BrowserRouter></WebAppsUX>);
    await waitFor(() => expect(screen.getByTestId('sidebar')).toBeDefined());

    const navigation = screen.getByRole('navigation');
    await waitFor(() => within(navigation).getByRole('link', { name: /nav item/i }));
    expect(within(navigation).getByRole('link', { name: /navdropdown coloured/i })).toBeDefined();

    await act(async () => {
        fireEvent.click(within(navigation).getByRole('link', { name: /navdropdown coloured/i }))
    });
    await waitFor(() => {
        within(navigation).getByRole('link', { name: /navchild coloured/i })
    });
    expect(within(navigation).getByRole('link', { name: /navchild coloured/i })).toBeDefined();

    await waitFor(() => {
        fireEvent.click(within(navigation).getByRole('link', { name: /navchild coloured/i }));
    });
    expect(within(navigation).getByRole('link', { name: /navchild coloured/i })).toBeDefined();
});

test('Sidebar fails to load', async () => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {});

    server.use(
        rest.get('/api/navigation', (req, res, ctx) => {
            return res(
                ctx.status(500),
                ctx.json({
                    message: "Test Failed",
                })

            )
        }),
    )
    render(<WebAppsUX><BrowserRouter><Sidebar data-testid="sidebar" /></BrowserRouter></WebAppsUX>);
    await waitFor(() => expect(screen.getByTestId('sidebar')).toBeDefined());

    const navigation = screen.getByRole('navigation');
    await waitFor(() => within(navigation).getByText(/error: test failed/i));
    expect(within(navigation).getByText(/error: test failed/i)).toBeDefined();
    expect(within(navigation).getByRole('button', {  name: /click here to try again\./i})).toBeDefined();

    spy.mockRestore();
});