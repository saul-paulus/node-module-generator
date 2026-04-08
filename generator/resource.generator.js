const path = require("path");
const fs = require("fs-extra");
const ejs = require("ejs");
const { pascalCase, camelCase } = require("../utils/case.util");

module.exports = async function (name) {
  const basePath = path.join(process.cwd(), "src/modules", name);

  const dirs = [
    "domain/entities",
    "domain/repositories",
    "application/usecases",
    "application/dtos",
    "infrastructure/repositories",
    "interfaces/controllers",
    "interfaces/routes",
  ];

  dirs.forEach((dir) => fs.ensureDirSync(path.join(basePath, dir)));


  const templateData = {
    name,
    className: pascalCase(name),
    camelName: camelCase(name),
    useCaseClassName: `${pascalCase(name)}UseCase`,
    useCaseFileName: `${name.toLowerCase()}.usecase`,
  };

  const renderAndWrite = async (templateName, outputPath) => {
    const templateContent = await ejs.renderFile(
      path.join(__dirname, "../templates/module", templateName),
      templateData
    );
    fs.writeFileSync(path.join(basePath, outputPath), templateContent);
  };

  await renderAndWrite("controller.ejs", `interfaces/controllers/${pascalCase(name)}Controller.js`);
  await renderAndWrite("controller.test.ejs", `interfaces/controllers/${pascalCase(name)}Controller.test.js`);
  await renderAndWrite("route.ejs", `interfaces/routes/${name.toLowerCase()}.routes.js`);
  
  await renderAndWrite("usecase.ejs", `application/usecases/${pascalCase(name)}UseCase.js`);
  await renderAndWrite("usecase.test.ejs", `application/usecases/${pascalCase(name)}UseCase.test.js`);
  
  await renderAndWrite("entity.ejs", `domain/entities/${pascalCase(name)}.js`);
  await renderAndWrite("repository.interface.ejs", `domain/repositories/${pascalCase(name)}Repository.js`);
  
  await renderAndWrite("repository.impl.ejs", `infrastructure/repositories/Prisma${pascalCase(name)}Repository.js`);
  await renderAndWrite("dto.ejs", `application/dtos/${name.toLowerCase()}.dto.js`);
  
  await renderAndWrite("di.ejs", `${name}.module.js`);

  console.log(`✔ Resource ${name} generated successfully with Clean Architecture and Awilix DI!`);
};
