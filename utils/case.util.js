exports.pascalCase = (str) => {
  // Split on hyphens, underscores, or camelCase boundaries
  const words =
    str.replace(/([a-z])([A-Z])/g, "$1 $2").match(/[a-z0-9]+/gi) || [];
  return words
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join("");
};

exports.camelCase = (str) => {
  const words =
    str.replace(/([a-z])([A-Z])/g, "$1 $2").match(/[a-z0-9]+/gi) || [];
  if (!words.length) return "";
  return (
    words[0].toLowerCase() +
    words
      .slice(1)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join("")
  );
};
