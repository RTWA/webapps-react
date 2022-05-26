import React, { useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { WebAppsUX, WebAppsUXContext } from '../../Context/index';

import { Flyout, FlyoutHeader, FlyoutContent, FlyoutFooter } from '.';

const ToggleFullFlyout = () => {
    const { useDrawer, useFlyouts } = useContext(WebAppsUXContext);
    const { flyout, setFlyout, openFlyout, toggleFlyout } = useFlyouts;
    const { drawer, setDrawer } = useDrawer;

    useEffect(() => {
        drawer.active = true;
        setDrawer({ ...drawer });
        flyout.display_mode = 'side';
        flyout.opened = false;
        setFlyout({ ...flyout });
        openFlyout();
    }, []);

    return <button onClick={toggleFlyout}>Toggle Full Flyout</button>
}

const ToggleFlyout = () => {
    const { useFlyouts } = useContext(WebAppsUXContext);
    const { flyout, setFlyout, toggleFlyout } = useFlyouts;

    useEffect(() => {
        flyout.display_mode = 'overlay';
        flyout.opened = false;
        setFlyout({ ...flyout });
    }, []);

    return <button onClick={toggleFlyout}>Toggle Flyout</button>
}

const TestFlyout = ({ overlay, closeAction }) => {
    return (
        <WebAppsUX>
            <BrowserRouter>
                <Flyout data-testid="flyout">
                    <FlyoutHeader closeAction={closeAction}>
                        <h1>Test Flyout Header</h1>
                    </FlyoutHeader>
                    <FlyoutContent>
                        <p>This is the flyout Content</p>
                    </FlyoutContent>
                    <FlyoutFooter>
                        <h1>Test Flyout Footer</h1>
                    </FlyoutFooter>
                </Flyout>
                {
                    (!overlay)
                        ? <ToggleFullFlyout />
                        : <ToggleFlyout />
                }
            </BrowserRouter>
        </WebAppsUX>
    )
}

test('Flyout Component Renders', async () => {
    render(<TestFlyout closeAction={() => { }} />);
    await waitFor(() => expect(screen.getByTestId('flyout')).toBeDefined());
    await waitFor(() => expect(screen.getByText(/this is the flyout content/i)).toBeDefined());
    expect(screen.getByRole('heading', { name: /test flyout header/i })).toBeDefined();
    expect(screen.getByRole('heading', { name: /test flyout footer/i })).toBeDefined();
});

test('Flyout renders and can be Toggled', async () => {
    render(<TestFlyout closeAction={null} />);
    await waitFor(() => expect(screen.getByTestId('flyout')).toBeDefined());
    await waitFor(() => expect(screen.getByText(/this is the flyout content/i)).toBeDefined());

    expect(screen.getByRole('button', { name: /toggle full flyout/i })).toBeDefined();

    await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /toggle full flyout/i }))
    });
    await waitFor(() => {
        expect(screen.getByTestId('flyout').classList.contains('w-0')).toBe(true);
    });
});

test('Flyout Overlay renders and can be Toggled', async () => {
    global.innerWidth = 200;
    render(<TestFlyout overlay={true} closeAction={null} />);
    await waitFor(() => expect(screen.getByTestId('flyout')).toBeDefined());
    await waitFor(() => expect(screen.getByText(/this is the flyout content/i)).toBeDefined());

    expect(screen.getByRole('button', { name: /toggle flyout/i })).toBeDefined();

    await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /toggle flyout/i }))
    });
    await waitFor(() => {
        expect(screen.getByTestId('flyout').classList.contains('w-full')).toBe(true);
    });
});
