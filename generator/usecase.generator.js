import path from "path";
import { pascalCase, camelCase } from "../utils/case.util.js";
import FileUtil from "../utils/file.util.js";
import Logger from "../utils/logger.util.js";

export default async function (useCaseName, moduleName) {
  try {
    Logger.info(`Starting usecase generation: ${useCaseName} in module: ${moduleName}`);
    const basePath = path.join(process.cwd(), "src/modules", moduleName);
    const ucDir = "application/usecases";
    
    FileUtil.ensureDirectories(basePath, [ucDir]);

    const templateData = {
      name: moduleName, 
      className: pascalCase(useCaseName),
      camelName: camelCase(moduleName), // This is used for the repository name
      useCaseCamelName: camelCase(useCaseName),
    };

    await FileUtil.renderAndWrite(
      "module/usecase.ejs",
      templateData,
      path.join(basePath, ucDir, `${camelCase(useCaseName)}UseCase.js`)
    );

    await FileUtil.renderAndWrite(
      "module/usecase.test.ejs",
      templateData,
      path.join(basePath, ucDir, `${camelCase(useCaseName)}UseCase.test.js`)
    );

    Logger.success(`Usecase ${useCaseName} generated inside module ${moduleName}.`);
  } catch (error) {
    Logger.error(`Failed to generate usecase ${useCaseName}`, error);
    process.exit(1);
  }
}
