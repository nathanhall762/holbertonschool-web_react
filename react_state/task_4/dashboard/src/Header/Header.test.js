import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('App component', () => {
    it('renders without crashing', () => {
        render(<Header />);
    });
});