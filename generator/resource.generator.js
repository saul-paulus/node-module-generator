const path = require("path");
const { pascalCase, camelCase, kebabCase } = require("../utils/case.util");
const FileUtil = require("../utils/file.util");
const Logger = require("../utils/logger.util");

module.exports = async function (name) {
  try {
    Logger.info(`Starting generation for resource: ${name}`);
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

    FileUtil.ensureDirectories(basePath, dirs);

    const templateData = {
      name,
      className: pascalCase(name),
      camelName: camelCase(name),
    };

    const filesToGenerate = [
      { tpl: "module/controller.ejs", out: `interfaces/controllers/${kebabCase(name)}-controller.js` },
      { tpl: "module/controller.test.ejs", out: `interfaces/controllers/${kebabCase(name)}-controller.test.js` },
      { tpl: "module/route.ejs", out: `interfaces/routes/${kebabCase(name)}-routes.js` },
      { tpl: "module/usecase.ejs", out: `application/usecases/${kebabCase(name)}-use-case.js` },
      { tpl: "module/usecase.test.ejs", out: `application/usecases/${kebabCase(name)}-use-case.test.js` },
      { tpl: "module/entity.ejs", out: `domain/entities/${kebabCase(name)}-entity.js` },
      { tpl: "module/repository.interface.ejs", out: `domain/repositories/${kebabCase(name)}-repository.js` },
      { tpl: "module/repository.impl.ejs", out: `infrastructure/repositories/prisma-${kebabCase(name)}-repository.js` },
      { tpl: "module/dto.ejs", out: `application/dtos/${kebabCase(name)}-dto.js` },
      { tpl: "module/di.ejs", out: `${kebabCase(name)}.module.js` }
    ];

    for (const file of filesToGenerate) {
      await FileUtil.renderAndWrite(
        file.tpl,
        templateData,
        path.join(basePath, file.out)
      );
    }

    Logger.success(`Resource ${name} generated successfully with Clean Architecture and Awilix DI!`);
  } catch (error) {
    Logger.error(`Failed to generate resource ${name}`, error);
    process.exit(1);
  }
};
