const path = require("path");
const fs = require("fs-extra");
const ejs = require("ejs");
const { pascalCase, camelCase } = require("../utils/case.util");

module.exports = async function (schemaName, moduleName) {
  const basePath = path.join(process.cwd(), "src/modules", moduleName);
  const validationDir = path.join(basePath, "infrastructure/validation");
  fs.ensureDirSync(validationDir);

  const templateData = {
    name: moduleName, 
    className: pascalCase(schemaName),
    camelName: camelCase(moduleName),
  };

  const templateContent = await ejs.renderFile(path.join(__dirname, "../templates/module/dto.ejs"), templateData);
  fs.writeFileSync(path.join(validationDir, `${schemaName}.schema.js`), templateContent);

  console.log(`✔ DTO Schema ${schemaName} generated inside module ${moduleName}.`);
};
