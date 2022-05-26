import React from 'react';
import { render, screen } from '@testing-library/react';

import Switch from './Switch';

test('Switch Component Renders', () => {
    render(<Switch label="webapps-Switch-component" />);

    expect(screen.getByText('webapps-Switch-component')).toBeDefined();
});

test('Disabled Switch Component Renders', () => {
    render(<Switch label="webapps-Switch-Disabled-component" disabled />);

    expect(screen.getByText('webapps-Switch-Disabled-component')).toBeDefined();
});

test('Checked Switch Component Renders', () => {
    render(<Switch label="webapps-Switch-Checked-component" checked onChange={() => { }} />);

    expect(screen.getByText('webapps-Switch-Checked-component')).toBeDefined();
});

test('Switch Component in Saving State', () => {
    render(<Switch label="webapps-Switch-Saving-component" state="saving" />);

    expect(screen.getByText('webapps-Switch-Saving-component')).toBeDefined();
});

test('Switch Component in Saved State', () => {
    render(<Switch label="webapps-Switch-Saved-component" state="saved" />);

    expect(screen.getByText('webapps-Switch-Saved-component')).toBeDefined();
});

test('Switch Component in Error State', () => {
    render(<Switch label="webapps-Switch-Error-component" state="error" error="this is the error" />);

    expect(screen.getByText('webapps-Switch-Error-component')).toBeDefined();
    expect(screen.getByText(/this is the error/i)).toBeDefined();
});

test('Switch Component with Help Text', () => {
    render(<Switch label="webapps-Switch-HelpText-component" helpText="this is the help text" />);

    expect(screen.getByText('webapps-Switch-HelpText-component')).toBeDefined();
    expect(screen.getByText(/this is the help text/i)).toBeDefined();
});

test('Switch Component with Action', () => {
    render(<Switch label="webapps-Switch-Action-component" action={<span>test action</span>} />);

    expect(screen.getByText('webapps-Switch-Action-component')).toBeDefined();
    expect(screen.getByText(/test action/i)).toBeDefined();
});