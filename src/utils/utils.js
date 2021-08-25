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

export const selectPosition = () => (Math.random() * 75).toFixed(0) + '%';

export const generateOrbStyle = () => {
  const bkdgColor = colorPicker(.75);
  const borderStyle = borderPicker();
  const boxShadowStyle = boxShadowPicker();
  const positionTop = selectPosition();
  const positionRight = selectPosition();

  return {
    backgroundColor: bkdgColor,
    border: borderStyle,
    boxShadow: boxShadowStyle,
    top: positionTop,
    right: positionRight
  };
};

export const orbCount = () => Math.ceil(Math.random() * 10);
