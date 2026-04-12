const path = require("path");
const { pascalCase, camelCase } = require("../utils/case.util");
const FileUtil = require("../utils/file.util");
const Logger = require("../utils/logger.util");

module.exports = async function (name) {
  try {
    Logger.info(`Starting generation for module: ${name}`);
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

    // Create directories
    FileUtil.ensureDirectories(basePath, dirs);

    const templateData = {
      name,
      className: pascalCase(name),
      camelName: camelCase(name),
      useCaseClassName: `${pascalCase(name)}UseCase`,
      useCaseFileName: `${name.toLowerCase()}.usecase`,
    };

    const filesToGenerate = [
      { tpl: "module/controller.ejs", out: `interfaces/controllers/${pascalCase(name)}Controller.js` },
      { tpl: "module/controller.test.ejs", out: `interfaces/controllers/${pascalCase(name)}Controller.test.js` },
      { tpl: "module/route.ejs", out: `interfaces/routes/${name.toLowerCase()}.routes.js` },
      { tpl: "module/usecase.ejs", out: `application/usecases/${pascalCase(name)}UseCase.js` },
      { tpl: "module/usecase.test.ejs", out: `application/usecases/${pascalCase(name)}UseCase.test.js` },
      { tpl: "module/entity.ejs", out: `domain/entities/${pascalCase(name)}.js` },
      { tpl: "module/repository.interface.ejs", out: `domain/repositories/${pascalCase(name)}Repository.js` },
      { tpl: "module/repository.impl.ejs", out: `infrastructure/repositories/Prisma${pascalCase(name)}Repository.js` },
      { tpl: "module/dto.ejs", out: `application/dtos/${name.toLowerCase()}.dto.js` },
      { tpl: "module/di.ejs", out: `${name}.module.js` }
    ];

    for (const file of filesToGenerate) {
      await FileUtil.renderAndWrite(
        file.tpl,
        templateData,
        path.join(basePath, file.out)
      );
    }

    Logger.success(`Module ${name} generated successfully!`);
  } catch (error) {
    Logger.error(`Failed to generate module ${name}`, error);
    process.exit(1);
  }
};
