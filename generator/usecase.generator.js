const path = require("path");
const fs = require("fs-extra");
const ejs = require("ejs");
const { pascalCase, camelCase } = require("../utils/case.util");

module.exports = async function (useCaseName, moduleName) {
  const basePath = path.join(process.cwd(), "src/modules", moduleName);
  const ucDir = path.join(basePath, "application/usecases");
  fs.ensureDirSync(ucDir);

  const templateData = {
    name: moduleName, 
    className: pascalCase(moduleName),
    camelName: camelCase(moduleName),
    useCaseClassName: `${pascalCase(useCaseName)}UseCase`,
    useCaseFileName: useCaseName, 
  };

  const templateContent = await ejs.renderFile(path.join(__dirname, "../templates/module/usecase.ejs"), templateData);
  fs.writeFileSync(path.join(ucDir, `${pascalCase(useCaseName)}UseCase.js`), templateContent);

  const testContent = await ejs.renderFile(path.join(__dirname, "../templates/module/usecase.test.ejs"), templateData);
  fs.writeFileSync(path.join(ucDir, `${pascalCase(useCaseName)}UseCase.test.js`), testContent);

  console.log(`✔ Usecase ${useCaseName} generated inside module ${moduleName}.`);
};
