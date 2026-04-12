const path = require("path");
const { pascalCase, camelCase } = require("../utils/case.util");
const FileUtil = require("../utils/file.util");
const Logger = require("../utils/logger.util");

module.exports = async function (useCaseName, moduleName) {
  try {
    Logger.info(`Starting usecase generation: ${useCaseName} in module: ${moduleName}`);
    const basePath = path.join(process.cwd(), "src/modules", moduleName);
    const ucDir = "application/usecases";
    
    FileUtil.ensureDirectories(basePath, [ucDir]);

    const templateData = {
      name: moduleName, 
      className: pascalCase(moduleName),
      camelName: camelCase(moduleName),
      useCaseClassName: `${pascalCase(useCaseName)}UseCase`,
      useCaseFileName: useCaseName, 
    };

    await FileUtil.renderAndWrite(
      "module/usecase.ejs",
      templateData,
      path.join(basePath, ucDir, `${pascalCase(useCaseName)}UseCase.js`)
    );

    await FileUtil.renderAndWrite(
      "module/usecase.test.ejs",
      templateData,
      path.join(basePath, ucDir, `${pascalCase(useCaseName)}UseCase.test.js`)
    );

    Logger.success(`Usecase ${useCaseName} generated inside module ${moduleName}.`);
  } catch (error) {
    Logger.error(`Failed to generate usecase ${useCaseName}`, error);
    process.exit(1);
  }
};
