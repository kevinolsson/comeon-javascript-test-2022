export const classes = (classNames : string[]): string =>
  classNames.filter(Boolean).join(' ');