import React from 'react';
import { render, screen } from '@testing-library/react';

import DropDownButton from './DropDownButton';
import { WebAppsUX } from '../Context/index';

test('DropDownButton Component Renders', () => {
    render(<WebAppsUX>
        <DropDownButton data-testid="webapps-DropDownButton-component" text="Button Drop">
            <div>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    Link
                </a>
            </div>
        </DropDownButton>
    </WebAppsUX>);

    expect(screen.getByTestId('webapps-DropDownButton-component')).toBeDefined();
});