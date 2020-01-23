import hexRgb from 'hex-rgb';

export default (hex: string, alpha: number): string => {
  const { red, green, blue } = hexRgb(hex);

  return alpha
    ? `rgba(${red}, ${green}, ${blue}, ${alpha})`
    : `rgb(${red}, ${green}, ${blue})`;
};
