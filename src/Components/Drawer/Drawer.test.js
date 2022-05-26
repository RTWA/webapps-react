import React, { useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { WebAppsUX, WebAppsUXContext } from '../../Context/index';

import { Drawer, DrawerHeader, DrawerItems, DrawerItem } from '.';

const ToggleFullDrawer = () => {
    const { useDrawer, useFlyouts } = useContext(WebAppsUXContext);
    const { drawer, setDrawer, openDrawer, toggleDrawer } = useDrawer;
    const { flyout, setFlyout } = useFlyouts;

    useEffect(() => {
        flyout.active = true;
        setFlyout({ ...flyout });
        drawer.display_mode = 'side';
        drawer.opened = false;
        setDrawer({ ...drawer });
        openDrawer();
    }, []);

    return <button onClick={toggleDrawer}>Toggle Full Drawer</button>
}

const ToggleDrawer = () => {
    const { useDrawer } = useContext(WebAppsUXContext);
    const { drawer, setDrawer, toggleDrawer } = useDrawer;

    useEffect(() => {
        drawer.display_mode = 'overlay';
        drawer.opened = false;
        setDrawer({ ...drawer });
    }, []);

    return <button onClick={toggleDrawer}>Toggle Drawer</button>
}

const TestDrawer = ({ overlay }) => {
    return (
        <WebAppsUX>
            <BrowserRouter>
                <Drawer data-testid="drawer">
                    <DrawerHeader>
                        <h1>Test Drawer Header</h1>
                    </DrawerHeader>
                    <DrawerItems>
                        <DrawerItem
                            icon={<i>Test Icon</i>}
                            badge={{
                                text: 'badge'
                            }}
                            to="/test"
                        >
                            Drawer Item 1
                        </DrawerItem>
                        <DrawerItem
                            icon={<i>Test Icon</i>}
                            badge={{
                                text: 'badge2'
                            }}
                            color="red"
                            to="/test2"
                        >
                            Drawer Item 2
                        </DrawerItem>
                    </DrawerItems>
                </Drawer>
                {
                    (!overlay)
                        ? <ToggleFullDrawer />
                        : <ToggleDrawer />
                }
            </BrowserRouter>
        </WebAppsUX>
    )
}

test('Drawer Component Renders', async () => {
    render(<TestDrawer />);
    await waitFor(() => expect(screen.getByTestId('drawer')).toBeDefined());
    await waitFor(() => expect(screen.getByRole('link', { name: /drawer item 1/i })).toBeDefined());
    expect(screen.getByRole('link', { name: /drawer item 2/i })).toBeDefined();
    expect(screen.getByRole('heading', { name: /test drawer header/i })).toBeDefined();
});

test('Drawer renders and can be Toggled', async () => {
    render(<TestDrawer />);
    await waitFor(() => expect(screen.getByTestId('drawer')).toBeDefined());
    await waitFor(() => screen.getByRole('link', { name: /drawer item 1/i }));

    expect(screen.getByRole('button', { name: /toggle full drawer/i })).toBeDefined();

    await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /toggle full drawer/i }))
    });
    await waitFor(() => {
        expect(screen.getByTestId('drawer').classList.contains('-ml-72')).toBe(true);
    });
});

test('Drawer Overlay renders and can be Toggled', async () => {
    global.innerWidth = 200;
    render(<TestDrawer overlay={true} />);
    await waitFor(() => expect(screen.getByTestId('drawer')).toBeDefined());
    await waitFor(() => screen.getByRole('link', { name: /drawer item 1/i }));

    expect(screen.getByRole('button', { name: /toggle drawer/i })).toBeDefined();

    await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /toggle drawer/i }))
    });
    await waitFor(() => {
        expect(screen.getByTestId('drawer').classList.contains('translate-x-0')).toBe(true);
    });
});