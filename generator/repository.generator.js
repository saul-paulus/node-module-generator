import path from "path";
import { pascalCase, camelCase, kebabCase } from "../utils/case.util.js";
import FileUtil from "../utils/file.util.js";
import Logger from "../utils/logger.util.js";

export default async function (moduleName) {
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
      { tpl: "module/entity.ejs", out: `domain/entities/${kebabCase(moduleName)}-entity.js` },
      { tpl: "module/repository.interface.ejs", out: `domain/repositories/${kebabCase(moduleName)}-repository.js` },
      { tpl: "module/repository.impl.ejs", out: `infrastructure/repositories/prisma-${kebabCase(moduleName)}-repository.js` }
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
}
