import React, { useContext, useEffect } from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import PageWrapper from './PageWrapper';
import { WebAppsUX, WebAppsUXContext } from '../Context';

const TestElement = () => {
    const { useDrawer } = useContext(WebAppsUXContext);
    const { drawer, setDrawer } = useDrawer;

    useEffect(() => {
        drawer.active = true;
        setDrawer({ ...drawer });
    }, []);

    return <PageWrapper data-testid="webapps-PageWrapper-component" id="test" />
}

test('PageWrapper Component Renders', async () => {
    render(<WebAppsUX><PageWrapper data-testid="webapps-PageWrapper-component" id="test" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-PageWrapper-component')).toBeDefined());
});

test('PageWrapper Component Renders with Title', async () => {
    render(<WebAppsUX><PageWrapper data-testid="webapps-PageWrapper-component" id="test" title="Test Page" /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-PageWrapper-component')).toBeDefined());
    expect(screen.getByText(/test page/i)).toBeDefined();
});

test('PageWrapper Component Renders with Drawer Toggle', async () => {
    render(<WebAppsUX><TestElement /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-PageWrapper-component')).toBeDefined());
});