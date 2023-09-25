import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

describe('App component', () => {
    it('renders without crashing', () => {
        render(<Notifications />);
    });
});