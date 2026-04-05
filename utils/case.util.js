exports.pascalCase = (str) => {
  const words = str.match(/[a-z0-9]+/gi) || [];
  return words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
};

exports.camelCase = (str) => {
  const words = str.match(/[a-z0-9]+/gi) || [];
  if (!words.length) return '';
  return words[0].toLowerCase() + words.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
};
