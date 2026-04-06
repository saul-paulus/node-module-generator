const path = require("path");
const fs = require("fs-extra");
const ejs = require("ejs");
const { pascalCase, camelCase } = require("../utils/case.util");

module.exports = async function (schemaName, moduleName) {
  const basePath = path.join(process.cwd(), "src/modules", moduleName);
  const dtoDir = path.join(basePath, "application/dtos");
  fs.ensureDirSync(dtoDir);

  const templateData = {
    name: moduleName, 
    className: pascalCase(schemaName),
    camelName: camelCase(moduleName),
  };

  const templateContent = await ejs.renderFile(path.join(__dirname, "../templates/module/dto.ejs"), templateData);
  fs.writeFileSync(path.join(dtoDir, `${schemaName.toLowerCase()}.dto.js`), templateContent);

  console.log(`✔ DTO ${schemaName} generated inside module ${moduleName} at application/dtos.`);
};
