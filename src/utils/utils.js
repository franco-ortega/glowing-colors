export const colorPicker = (opacity = 1) => {
  const colorCode = () => Math.floor(Math.random() * 256);

  const red = colorCode();
  const green = colorCode();
  const blue = colorCode();

  return `rgb(${red}, ${green}, ${blue}, ${opacity})`;
};

export const borderPicker = () => `medium solid ${colorPicker(.5)}`;

export const boxShadowPicker = () => {
  const blurRadius = Math.max(3, (Math.random() * 15).toFixed(1));
  const spreadRadius = Math.max(1, (Math.random() * 5).toFixed(1));

  return `0 0 ${blurRadius}vw ${spreadRadius}vw ${colorPicker(1)}`;
};

export const positionPicker = () => (Math.random() * 75).toFixed(0) + '%';

export const heightPicker = () => {
  const height = (Math.floor(Math.random() * 201).toFixed(0));

  return `${height}px`;
};

export const generateOrbStyle = () => {
  const dynamicStyles = {};

  dynamicStyles['backgroundColor'] = colorPicker(.75);
  dynamicStyles['border'] = borderPicker();
  dynamicStyles['boxShadow'] = boxShadowPicker();
  dynamicStyles['top'] = positionPicker();
  dynamicStyles['right'] = positionPicker();
  dynamicStyles['height'] = heightPicker();
  dynamicStyles['width'] = dynamicStyles.height;
    
  return dynamicStyles;
};

export const orbCount = () => Math.ceil(Math.random() * 10);
