import React, { useContext, useEffect } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { WebApps, WebAppsUX, WebAppsUXContext } from '../../Context';
import AppCard from './AppCard/AppCard';

import "../../../__mocks__/mockMedia.js";
import { act } from 'react-dom/test-utils';

const TestLightElement = () => {
    return (<WebApps>
        <AppCard
            app={{
                icon: '<i>icon</i>',
                version: '1.0.0',
                name: 'Test App',
                description: 'Description for app in testing',
                author: 'TestAuthor',
                repository: '123',
                installed: true,
                hasUpdate: true,
            }}
            data-testid="webapps-AppCard-component"
            showActions
        />
    </WebApps>)
}

const TestDarkElement = () => {
    const { setDarkMode } = useContext(WebAppsUXContext);

    useEffect(() => {
        setDarkMode('dark');
    }, []);
    return (<WebApps>
        <AppCard
            app={{
                icon: '<i>icon</i>',
                version: '1.0.0',
                name: 'Test App',
                description: 'Description for app in testing',
                author: 'TestAuthor',
                repository: '123',
                installed: true,
                active: false,
            }}
            data-testid="webapps-AppCard-Dark-component"
            showActions
        />
    </WebApps>)
}

const TestUserElement = () => {
    const { setDarkMode } = useContext(WebAppsUXContext);

    useEffect(() => {
        setDarkMode('user');
        localStorage['WA_DarkMode'] = 'dark';
    }, []);
    return (<WebApps>
        <AppCard
            app={{
                icon: '<i>icon</i>',
                version: '1.0.0',
                name: 'Test App',
                description: 'Description for app in testing',
                author: 'TestAuthor',
                repository: '123',
                downloaded: true,
                installed: false,
            }}
            data-testid="webapps-AppCard-User-component"
            showActions
        />
    </WebApps>)
}

test('AppCard Component Renders', async () => {
    render(<WebAppsUX><TestLightElement /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-AppCard-component')).toBeDefined());
});

test('AppCard Component Renders in DarkMode', async () => {
    render(<WebAppsUX><TestDarkElement /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-AppCard-Dark-component')).toBeDefined());
});

test('AppCard Component Renders in UseMode', async () => {
    render(<WebAppsUX><TestUserElement /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-AppCard-User-component')).toBeDefined());
});

test('AppCard Component Renders with installed and active app', async () => {
    render(
        <WebAppsUX>
            <WebApps>
                <AppCard
                    app={{
                        icon: '<i>icon</i>',
                        release: {
                            version: '1.0.0',
                        },
                        name: 'Test App',
                        description: 'Description for app in testing',
                        author: 'TestAuthor',
                        installed: true,
                        active: true,
                    }}
                    data-testid="webapps-AppCard2-component"
                    showActions
                />
            </WebApps>
        </WebAppsUX>
    );

    await waitFor(() => expect(screen.getByTestId('webapps-AppCard2-component')).toBeDefined());
});

test('AppCard Component Renders with not downloaded or installed app', async () => {
    render(
        <WebAppsUX>
            <WebApps>
                <AppCard
                    app={{
                        icon: '<i>icon</i>',
                        release: {
                            version: '1.0.0',
                        },
                        name: 'Test App',
                        description: 'Description for app in testing',
                        author: 'TestAuthor',
                        installed: false,
                        downloaded: false,
                    }}
                    data-testid="webapps-AppCard2-component"
                    showActions
                />
            </WebApps>
        </WebAppsUX>
    );

    await waitFor(() => expect(screen.getByTestId('webapps-AppCard2-component')).toBeDefined());
});

test('AppCard Component Renders without actions', async () => {
    render(
        <WebAppsUX>
            <WebApps>
                <AppCard
                    app={{
                        icon: '<i>icon</i>',
                        release: {
                            version: '1.0.0',
                        },
                        name: 'Test App',
                        description: 'Description for app in testing',
                        author: 'TestAuthor',
                    }}
                    data-testid="webapps-AppCard-NoActions-component"
                />
            </WebApps>
        </WebAppsUX>
    );

    await waitFor(() => expect(screen.getByTestId('webapps-AppCard-NoActions-component')).toBeDefined());
});

test('AppCard Component Renders with app pending update and displays changelog', async () => {
    render(
        <WebAppsUX>
            <WebApps>
                <AppCard
                    app={{
                        icon: '<i>icon</i>',
                        release: {
                            version: '1.0.0',
                        },
                        name: 'Test App',
                        description: 'Description for app in testing',
                        author: 'TestAuthor',
                        installed: true,
                        hasUpdate: true,
                    }}
                    data-testid="webapps-AppCard-Changelog-component"
                    showActions
                />
            </WebApps>
        </WebAppsUX>
    );

    await waitFor(() => expect(screen.getByTestId('webapps-AppCard-Changelog-component')).toBeDefined());
    expect(screen.getByRole('button', { name: /what\'s changed?/i })).toBeDefined();

    await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /what\'s changed?/i }));
    });
    await waitFor(() => {
        expect(screen.getByText(/test app - 1.0.0/i)).toBeDefined();
    });
    expect(screen.getByRole('button', { name: /close/i })).toBeDefined();

    await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /close/i }))
    });
    expect(screen.queryByRole('button', { name: /close/i })).toBeNull();
});