import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import DataSuggest from './DataSuggest';
import { WebAppsUX } from '../Context/index';

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

test('DataSuggest Component Renders', async () => {
    render(<WebAppsUX><DataSuggest data-testid="webapps-DataSuggest-component" data={data} /></WebAppsUX>);

    await waitFor(() => expect(screen.getByTestId('webapps-DataSuggest-component')).toBeDefined());
});