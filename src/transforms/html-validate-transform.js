module.exports = (value, outputPath) => {
  if (outputPath && outputPath.indexOf('.html') > -1) {
    value = value.replace(/'([^']*)'/g, "\"$1\"");
    value = value.replace(/<([^<>\s]+)([^>]*)\/>/g, "<$1$2>");
  }

  return value;
};
