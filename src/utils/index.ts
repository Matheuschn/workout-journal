export const RGBtoHex = (input: string): string => {
  //  If the input is a hex string, nothing to do.
  if (input.startsWith('#')) {
    return input;
  }
  //  If the input is not a rgb string, error out.
  if (!input.includes('rgb(')) {
    throw new Error('Invalid input!');
  }

  const values = input.split(/[()]/).slice(1, -1)[0].split(', ').map(Number);
  const hexStr = values.map((v) => v.toString(16).padStart(2, '0')).join('');

  return '#' + hexStr.toUpperCase();
};
