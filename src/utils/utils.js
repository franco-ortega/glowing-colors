export const colorCode = () => {
  return Math.floor(Math.random() * 256);
};

export const colorPicker = (opacity = 1) => {
  const red = colorCode();
  const green = colorCode();
  const blue = colorCode();

  return `rgb(${red}, ${green}, ${blue}, ${opacity})`;
};

export const orbCount = () => {
  return Math.ceil(Math.random() * 10);
};

export const shadowBlur = () => {
  const value = Math.max(3, (Math.random() * 15).toFixed(2));

  return `${value}vw`;
};

export const shadowSpread = () => {
  const value = Math.max(1, (Math.random() * 5).toFixed(2));

  return `${value}vw`;
};
