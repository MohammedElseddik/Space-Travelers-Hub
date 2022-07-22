const relativeUrl = (url = window.location.href) => {
  if (url.includes('/missions')) {
    return 'miss';
  }
  if (url.includes('/profile')) {
    return 'prof';
  }
  return 'rock';
};

export default relativeUrl;
