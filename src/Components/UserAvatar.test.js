import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import UserAvatar from './UserAvatar';

test('UserAvatar Component Renders', async () => {
    render(<UserAvatar data-testid="webapps-UserAvatar-component" name="test user" />);

    await waitFor(() => expect(screen.getByTestId('webapps-UserAvatar-component')).toBeDefined());
});

test('UserAvatar Component Renders with Specified Color', async () => {
    render(<UserAvatar data-testid="webapps-UserAvatarBlack-component" name="test user" color="#000" />);

    await waitFor(() => expect(screen.getByTestId('webapps-UserAvatarBlack-component')).toBeDefined());
});