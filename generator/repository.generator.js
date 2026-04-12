const path = require("path");
const { pascalCase, camelCase } = require("../utils/case.util");
const FileUtil = require("../utils/file.util");
const Logger = require("../utils/logger.util");

module.exports = async function (moduleName) {
  try {
    Logger.info(`Starting repository pattern generation for module: ${moduleName}`);
    const basePath = path.join(process.cwd(), "src/modules", moduleName);

    const dirs = [
      "domain/entities",
      "domain/repositories",
      "infrastructure/repositories",
    ];

    FileUtil.ensureDirectories(basePath, dirs);

    const templateData = {
      name: moduleName,
      className: pascalCase(moduleName),
      camelName: camelCase(moduleName),
    };

    const filesToGenerate = [
      { tpl: "module/entity.ejs", out: `domain/entities/${pascalCase(moduleName)}.js` },
      { tpl: "module/repository.interface.ejs", out: `domain/repositories/${pascalCase(moduleName)}Repository.js` },
      { tpl: "module/repository.impl.ejs", out: `infrastructure/repositories/Prisma${pascalCase(moduleName)}Repository.js` }
    ];

    for (const file of filesToGenerate) {
      await FileUtil.renderAndWrite(
        file.tpl,
        templateData,
        path.join(basePath, file.out)
      );
    }

    Logger.success(`Repository patterns for ${moduleName} generated successfully.`);
  } catch (error) {
    Logger.error(`Failed to generate repository patterns for ${moduleName}`, error);
    process.exit(1);
  }
};
