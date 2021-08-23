const colorCode = () => {
  return Math.floor(Math.random() * 256);
};

export const colorPicker = (opacity) => {
  const red = colorCode();
  const green = colorCode();
  const blue = colorCode();

  return `rgb(${red}, ${green}, ${blue}, ${opacity})`;
};
