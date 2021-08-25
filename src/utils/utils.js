export const colorPicker = (opacity = 1) => {
  const colorCode = () => Math.floor(Math.random() * 256);

  const red = colorCode();
  const green = colorCode();
  const blue = colorCode();

  return `rgb(${red}, ${green}, ${blue}, ${opacity})`;
};

export const shadowBlur = () => {
  const value = Math.max(3, (Math.random() * 15).toFixed(2));

  return `${value}vw`;
};

export const shadowSpread = () => {
  const value = Math.max(1, (Math.random() * 5).toFixed(2));

  return `${value}vw`;
};

export const selectPosition = () => {
  return (Math.random() * 75).toFixed(0) + '%';
};

export const generateOrbStyle = () => {
  const bkdgColor = colorPicker(.75);
  const borderStyle = `medium solid ${colorPicker(.5)}`;
  const blurRadius = shadowBlur();
  const spreadRadius = shadowSpread();
  const boxShadowStyle = `0 0 ${blurRadius} ${spreadRadius} ${colorPicker(1)}`;
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

export const orbCount = () => {
  return Math.ceil(Math.random() * 10);
};
