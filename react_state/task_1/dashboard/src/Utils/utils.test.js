// utils testing
import { getFooterCopy, getFullYear, getLatestNotification } from './utils';

expect(getFullYear()).toBe(2023);
expect(getFooterCopy(true)).toBe('Holberton School');
expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
expect(getLatestNotification()).toBe(
  '<strong>Urgent requirement</strong> - complete by EOD'
);
