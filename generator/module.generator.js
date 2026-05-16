import path from "path";
import { pascalCase, camelCase } from "../utils/case.util.js";
import FileUtil from "../utils/file.util.js";
import Logger from "../utils/logger.util.js";

export default async function (name) {
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
    };

    const filesToGenerate = [
      { tpl: "module/controller.ejs", out: `interfaces/controllers/${camelCase(name)}Controller.js` },
      { tpl: "module/controller.test.ejs", out: `interfaces/controllers/${camelCase(name)}Controller.test.js` },
      { tpl: "module/route.ejs", out: `interfaces/routes/${camelCase(name)}Routes.js` },
      { tpl: "module/usecase.ejs", out: `application/usecases/${camelCase(name)}UseCase.js` },
      { tpl: "module/usecase.test.ejs", out: `application/usecases/${camelCase(name)}UseCase.test.js` },
      { tpl: "module/entity.ejs", out: `domain/entities/${camelCase(name)}Entity.js` },
      { tpl: "module/repository.interface.ejs", out: `domain/repositories/${camelCase(name)}Repository.js` },
      { tpl: "module/repository.impl.ejs", out: `infrastructure/repositories/prisma${pascalCase(name)}Repository.js` },
      { tpl: "module/dto.ejs", out: `application/dtos/${camelCase(name)}Dto.js` },
      { tpl: "module/di.ejs", out: `${camelCase(name)}.module.js` }
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
}
