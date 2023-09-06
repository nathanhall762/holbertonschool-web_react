// Function to get the current year
const getFullYear = () => {
  const date = new Date();
  return date.getFullYear();
};

// Function to get footer copy based on the isIndex argument
const getFooterCopy = (isIndex) => {
  if (isIndex) {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard";
  }
};

export { getFullYear, getFooterCopy };
