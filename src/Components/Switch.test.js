import React from 'react';
import { render, screen } from '@testing-library/react';

import Switch from './Switch';

test('Switch Component Renders', () => {
    render(<Switch label="webapps-Switch-component" />);

    expect(screen.getByText('webapps-Switch-component')).toBeDefined();
});