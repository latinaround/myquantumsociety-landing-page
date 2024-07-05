export const copyToClipboard = (string: string) => {
  try {
    navigator.clipboard.writeText(string);
    return true;
  } catch (err) {
    console.error('Failed to copy URL: ', err);
  }
}