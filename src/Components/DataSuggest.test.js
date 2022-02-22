import React from 'react';
import { render, screen } from '@testing-library/react';

import DataSuggest from './DataSuggest';
import { WebApps } from '../Context/index';

const data = [
    {
        id: 1,
        label: 'test item 1',
    },
    {
        id: 2,
        label: 'test item 2',
    }
]

test('DataSuggest Component Renders', () => {
    render(<WebApps><DataSuggest data-testid="webapps-DataSuggest-component" data={data} /></WebApps>);

    expect(screen.getByTestId('webapps-DataSuggest-component')).toBeDefined();
});