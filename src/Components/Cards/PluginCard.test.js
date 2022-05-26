import React, { useContext, useEffect } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { WebApps, WebAppsUX, WebAppsUXContext } from '../../Context';
import PluginCard from './PluginCard/PluginCard';

import "../../../__mocks__/mockMedia.js";
import { act } from 'react-dom/test-utils';

const TestLightElement = () => {
    return (<WebApps>
        <PluginCard
            plugin={{
                icon: '<i>icon</i>',
                version: '1.0.0',
                name: 'Test Plugins',
                description: 'Description for plugin in testing',
                author: 'TestAuthor',
                repository: '123',
                installed: true,
                hasUpdate: true,
            }}
            data-testid="webapps-PluginCard-component"
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
        <PluginCard
            plugin={{
                icon: '<i>icon</i>',
                version: '1.0.0',
                name: 'Test Plugins',
                description: 'Description for plugin in testing',
                author: 'TestAuthor',
                repository: '123',
                installed: true,
                active: false,
            }}
            data-testid="webapps-PluginCard-Dark-component"
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
        <PluginCard
            plugin={{
                icon: '<i>icon</i>',
                version: '1.0.0',
                name: 'Test Plugins',
                description: 'Description for plugin in testing',
                author: 'TestAuthor',
                repository: '123',
                downloaded: true,
                installed: false,
            }}
            data-testid="webapps-PluginCard-User-component"
            showActions
        />
    </WebApps>)
}

test('PluginCard Component Renders', async () => {
    render(<WebAppsUX><TestLightElement /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-PluginCard-component')).toBeDefined());
});

test('PluginCard Component Renders in DarkMode', async () => {
    render(<WebAppsUX><TestDarkElement /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-PluginCard-Dark-component')).toBeDefined());
});

test('PluginCard Component Renders in UseMode', async () => {
    render(<WebAppsUX><TestUserElement /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-PluginCard-User-component')).toBeDefined());
});

test('PluginCard Component Renders with installed and active app', async () => {
    render(
        <WebAppsUX>
            <WebApps>
                <PluginCard
                    plugin={{
                        icon: '<i>icon</i>',
                        release: {
                            version: '1.0.0',
                        },
                        name: 'Test Plugins',
                        description: 'Description for plugin in testing',
                        author: 'TestAuthor',
                        installed: true,
                        state: true,
                        hasUpdate: false,
                    }}
                    data-testid="webapps-PluginCard2-component"
                    showActions
                />
            </WebApps>
        </WebAppsUX>
    );

    await waitFor(() => expect(screen.getByTestId('webapps-PluginCard2-component')).toBeDefined());
});

test('PluginCard Component Renders with not downloaded or installed app', async () => {
    render(
        <WebAppsUX>
            <WebApps>
                <PluginCard
                    plugin={{
                        icon: '<i>icon</i>',
                        release: {
                            version: '1.0.0',
                        },
                        name: 'Test Plugins',
                        description: 'Description for plugin in testing',
                        author: 'TestAuthor',
                        installed: false,
                        downloaded: false,
                    }}
                    data-testid="webapps-PluginCard2-component"
                    showActions
                />
            </WebApps>
        </WebAppsUX>
    );

    await waitFor(() => expect(screen.getByTestId('webapps-PluginCard2-component')).toBeDefined());
});

test('PluginCard Component Renders without actions', async () => {
    render(
        <WebAppsUX>
            <WebApps>
                <PluginCard
                    plugin={{
                        icon: '<i>icon</i>',
                        release: {
                            version: '1.0.0',
                        },
                        name: 'Test Plugins',
                        description: 'Description for plugin in testing',
                        author: 'TestAuthor',
                    }}
                    data-testid="webapps-PluginCard-NoActions-component"
                />
            </WebApps>
        </WebAppsUX>
    );

    await waitFor(() => expect(screen.getByTestId('webapps-PluginCard-NoActions-component')).toBeDefined());
});

test('PluginCard Component Renders with app pending update and displays changelog', async () => {
    render(
        <WebAppsUX>
            <WebApps>
                <PluginCard
                    plugin={{
                        icon: '<i>icon</i>',
                        release: {
                            version: '1.0.0',
                        },
                        name: 'Test Plugins',
                        description: 'Description for plugin in testing',
                        author: 'TestAuthor',
                        installed: true,
                        hasUpdate: true,
                    }}
                    data-testid="webapps-PluginCard-Changelog-component"
                    showActions
                />
            </WebApps>
        </WebAppsUX>
    );

    await waitFor(() => expect(screen.getByTestId('webapps-PluginCard-Changelog-component')).toBeDefined());
    expect(screen.getByRole('button', { name: /what\'s changed?/i })).toBeDefined();

    await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /what\'s changed?/i }));
    });
    await waitFor(() => {
        expect(screen.getByText(/test plugins - 1.0.0/i)).toBeDefined();
    });
    expect(screen.getByRole('button', { name: /close/i })).toBeDefined();

    await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /close/i }))
    });
    expect(screen.queryByRole('button', { name: /close/i })).toBeNull();
});