import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import DropDownButton from './DropDownButton';
import DropDownItem from './DropDownItem';
import { WebAppsUX } from '../Context/index';
import { BrowserRouter } from 'react-router-dom';

const mockCallback = jest.fn();

test('DropDownButton Component Renders', async () => {
    render(<WebAppsUX>
        <BrowserRouter>
            <DropDownButton data-testid="webapps-DropDownButton-component" text="Button Drop">
                <DropDownItem to="/test">Test Item 1</DropDownItem>
                <DropDownItem onClick={mockCallback} color="gray" active>Test Item 2</DropDownItem>
            </DropDownButton>
        </BrowserRouter>
    </WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-DropDownButton-component')).toBeDefined());
    expect(screen.queryByRole('link', { name: /test item 1/i })).toBeNull();
});

test('DropDownButton Component Opens on Click', async () => {
    render(<WebAppsUX>
        <BrowserRouter>
            <DropDownButton data-testid="webapps-DropDownButton-component" text="Button Drop">
                <DropDownItem to="/test">Test Item 1</DropDownItem>
                <DropDownItem onClick={mockCallback} color="gray" active>Test Item 2</DropDownItem>
            </DropDownButton>
        </BrowserRouter>
    </WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-DropDownButton-component')).toBeDefined());
    expect(screen.queryByRole('link', { name: /test item 1/i })).toBeNull();

    await act(async () => {
        fireEvent.click(screen.getByTestId('webapps-DropDownButton-component'))
    });
    await waitFor(() => {
        screen.getByRole('link', { name: /test item 1/i })
    });

    expect(screen.getByRole('link', { name: /test item 1/i })).toBeDefined();
    expect(screen.getByText(/test item 2/i)).toBeDefined();
});

test('DropDownButton Component onClick DropDownItem', async () => {
    render(<WebAppsUX>
        <BrowserRouter>
            <DropDownButton data-testid="webapps-DropDownButton-component" text="Button Drop">
                <DropDownItem to="/test">Test Item 1</DropDownItem>
                <DropDownItem onClick={mockCallback} color="gray" active>Test Item 2</DropDownItem>
            </DropDownButton>
        </BrowserRouter>
    </WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-DropDownButton-component')).toBeDefined());
    expect(screen.queryByRole('link', { name: /test item 1/i })).toBeNull();

    await act(async () => {
        fireEvent.click(screen.getByTestId('webapps-DropDownButton-component'))
    });
    await waitFor(() => {
        screen.getByRole('link', { name: /test item 1/i })
    });

    expect(screen.getByRole('link', { name: /test item 1/i })).toBeDefined();
    expect(screen.getByText(/test item 2/i)).toBeDefined();

    await act(async () => {
        fireEvent.click(screen.getByText(/test item 2/i))
    });
    await waitFor(() => {
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});