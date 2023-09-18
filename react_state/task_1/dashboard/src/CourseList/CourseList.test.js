import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

describe('App component', () => {
    it('renders without crashing', () => {
        render(<CourseList />);
    });
});