import path from "path";
import { pascalCase, camelCase, kebabCase } from "../utils/case.util.js";
import FileUtil from "../utils/file.util.js";
import Logger from "../utils/logger.util.js";

export default async function (schemaName, moduleName) {
  try {
    Logger.info(`Starting generation for DTO: ${schemaName} in module: ${moduleName}`);
    const basePath = path.join(process.cwd(), "src/modules", moduleName);
    const dtoDir = "application/dtos";
    
    FileUtil.ensureDirectories(basePath, [dtoDir]);

    const templateData = {
      name: moduleName, 
      className: pascalCase(schemaName),
      camelName: camelCase(moduleName),
      kebabName: kebabCase(schemaName),
    };

    await FileUtil.renderAndWrite(
      "module/dto.ejs",
      templateData,
      path.join(basePath, dtoDir, `${kebabCase(schemaName)}-dto.js`)
    );

    Logger.success(`DTO ${schemaName} generated inside module ${moduleName} at application/dtos.`);
  } catch (error) {
    Logger.error(`Failed to generate DTO ${schemaName}`, error);
    process.exit(1);
  }
}
