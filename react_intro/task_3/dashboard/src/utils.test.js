import { getFullYear, getFooterCopy, getLatestNotification } from './utils'; // adjust the import based on your file structure

// Test for getFullYear
describe('getFullYear', () => {
  it('should return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
});

// Test for getFooterCopy
describe('getFooterCopy', () => {
  it('should return "Holberton School" when argument is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  it('should return "Holberton School main dashboard" when argument is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
});

// Test for getLatestNotification
describe('getLatestNotification', () => {
  it('should return the correct string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
