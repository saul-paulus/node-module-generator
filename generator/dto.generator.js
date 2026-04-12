const path = require("path");
const { pascalCase, camelCase } = require("../utils/case.util");
const FileUtil = require("../utils/file.util");
const Logger = require("../utils/logger.util");

module.exports = async function (schemaName, moduleName) {
  try {
    Logger.info(`Starting generation for DTO: ${schemaName} in module: ${moduleName}`);
    const basePath = path.join(process.cwd(), "src/modules", moduleName);
    const dtoDir = "application/dtos";
    
    FileUtil.ensureDirectories(basePath, [dtoDir]);

    const templateData = {
      name: moduleName, 
      className: pascalCase(schemaName),
      camelName: camelCase(moduleName),
    };

    await FileUtil.renderAndWrite(
      "module/dto.ejs",
      templateData,
      path.join(basePath, dtoDir, `${schemaName.toLowerCase()}.dto.js`)
    );

    Logger.success(`DTO ${schemaName} generated inside module ${moduleName} at application/dtos.`);
  } catch (error) {
    Logger.error(`Failed to generate DTO ${schemaName}`, error);
    process.exit(1);
  }
};
