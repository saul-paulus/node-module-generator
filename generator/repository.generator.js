const path = require("path");
const fs = require("fs-extra");
const ejs = require("ejs");
const { pascalCase, camelCase } = require("../utils/case.util");

module.exports = async function (moduleName) {
  const basePath = path.join(process.cwd(), "src/modules", moduleName);

  const entityDir = path.join(basePath, "domain/entities");
  const repoInterfaceDir = path.join(basePath, "domain/repositories");
  const repoImplDir = path.join(basePath, "infrastructure/repositories");

  fs.ensureDirSync(entityDir);
  fs.ensureDirSync(repoInterfaceDir);
  fs.ensureDirSync(repoImplDir);

  const templateData = {
    name: moduleName,
    className: pascalCase(moduleName),
    camelName: camelCase(moduleName),
  };

  const renderAndWrite = async (templateName, outputPath) => {
    const templateContent = await ejs.renderFile(
      path.join(__dirname, "../templates/module", templateName),
      templateData
    );
    fs.writeFileSync(path.join(basePath, outputPath), templateContent);
  };

  await renderAndWrite("entity.ejs", `domain/entities/${moduleName}.entity.js`);
  await renderAndWrite("repository.interface.ejs", `domain/repositories/${moduleName}.repository.interface.js`);
  await renderAndWrite("repository.impl.ejs", `infrastructure/repositories/${moduleName}.repository.impl.js`);

  console.log(`✔ Repository patterns for ${moduleName} generated successfully.`);
};
