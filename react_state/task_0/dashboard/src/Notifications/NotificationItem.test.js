import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('App component', () => {
    it('renders without crashing', () => {
        render(<NotificationItem />);
    });
});