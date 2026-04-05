const path = require("path");
const fs = require("fs-extra");
const ejs = require("ejs");
const { pascalCase, camelCase } = require("../utils/case.util");

module.exports = async function (name) {
  const basePath = path.join(process.cwd(), "src/modules", name);

  const dirs = [
    "domain/entities",
    "domain/repositories",
    "domain/services",
    "application/usecases",
    "application/dtos",
    "infrastructure/repositories",
    "infrastructure/validation",
    "infrastructure/security",
    "infrastructure/services",
    "interfaces/controllers",
    "interfaces/routes",
  ];

  // Create directories
  dirs.forEach((dir) => fs.ensureDirSync(path.join(basePath, dir)));

  console.log(`✔ Module ${name} directory structure created.`);
  
  // Optionally create an empty module DI file
  const diFile = path.join(basePath, `${name}.module.js`);
  if (!fs.existsSync(diFile)) {
    fs.writeFileSync(diFile, `module.exports = function register${pascalCase(name)}Module(container) {\n  container.register({\n    // Inject dependencies here\n  });\n};\n`);
    console.log(`✔ Module DI registry ${name}.module.js created.`);
  }
};
