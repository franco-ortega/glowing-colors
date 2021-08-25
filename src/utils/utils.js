export const colorPicker = (opacity = 1) => {
  const colorCode = () => Math.floor(Math.random() * 256);

  const red = colorCode();
  const green = colorCode();
  const blue = colorCode();

  return `rgb(${red}, ${green}, ${blue}, ${opacity})`;
};

const borderPicker = () => `medium solid ${colorPicker(.5)}`;

const boxShadowPicker = () => {
  const blurRadius = Math.max(3, (Math.random() * 15).toFixed(2));
  const spreadRadius = Math.max(1, (Math.random() * 5).toFixed(2));

  return `0 0 ${blurRadius}vw ${spreadRadius}vw ${colorPicker(1)}`;
};

export const positionPicker = () => (Math.random() * 75).toFixed(0) + '%';

export const generateOrbStyle = () => {
  return {
    backgroundColor: colorPicker(.75),
    border: borderPicker(),
    boxShadow: boxShadowPicker(),
    top: positionPicker(),
    right: positionPicker()
  };
};

export const orbCount = () => Math.ceil(Math.random() * 10);
