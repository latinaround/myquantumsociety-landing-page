export const textReplace = (text: string, replace: string) => {
  text = text.replace(/\s+/g, replace).toLowerCase();
  return text
}

export const getPartialWordsText = (content: string, count: number): string => {
  const words = content.split(/\s+/);
  if (words.length <= count) {
    return content;  // Return the original content if fewer words than count
  }
  const responseWords = words.slice(0, count);
  return responseWords.join(' ') + '...';
}
