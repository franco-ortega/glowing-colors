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
