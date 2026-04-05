const path = require("path");
const fs = require("fs-extra");
const ejs = require("ejs");
const { pascalCase, camelCase } = require("../utils/case.util");

module.exports = async function (name) {
  const basePath = path.join(process.cwd(), "src/modules", name);

  const dirs = [
    "domain/entities",
    "domain/repositories",
    "domain/services",
    "application/usecases",
    "application/dtos",
    "infrastructure/repositories",
    "infrastructure/validation",
    "infrastructure/security",
    "infrastructure/services",
    "interfaces/controllers",
    "interfaces/routes",
  ];

  // Create directories
  dirs.forEach((dir) => fs.ensureDirSync(path.join(basePath, dir)));

  const templateData = {
    name,
    className: pascalCase(name),
    camelName: camelCase(name),
  };

  const renderAndWrite = async (templateName, outputPath) => {
    const templateContent = await ejs.renderFile(
      path.join(__dirname, "../templates/module", templateName),
      templateData
    );
    fs.writeFileSync(path.join(basePath, outputPath), templateContent);
  };

  // Interfaces
  await renderAndWrite("controller.ejs", `interfaces/controllers/${name}.controller.js`);
  await renderAndWrite("controller.test.ejs", `interfaces/controllers/${name}.controller.test.js`);
  await renderAndWrite("route.ejs", `interfaces/routes/${name}.routes.js`);

  // Application
  await renderAndWrite("usecase.ejs", `application/usecases/create-${name}.usecase.js`);
  await renderAndWrite("usecase.test.ejs", `application/usecases/create-${name}.usecase.test.js`);

  // Domain
  await renderAndWrite("entity.ejs", `domain/entities/${name}.entity.js`);
  await renderAndWrite("repository.interface.ejs", `domain/repositories/${name}.repository.interface.js`);

  // Infrastructure
  await renderAndWrite("repository.impl.ejs", `infrastructure/repositories/${name}.repository.impl.js`);
  await renderAndWrite("dto.ejs", `infrastructure/validation/create-${name}.schema.js`);

  // DI Setup
  await renderAndWrite("di.ejs", `${name}.module.js`);

  console.log(`✔ Module ${name} generated successfully with Clean Architecture and Awilix DI!`);
};
