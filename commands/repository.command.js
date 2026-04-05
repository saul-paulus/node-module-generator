const generateRepository = require("../generator/repository.generator");

module.exports = (program) => {
  program
    .command("repository <moduleName>")
    .description("Create domain and infrastructure repositories for a module")
    .action((moduleName) => {
      generateRepository(moduleName);
    });
};
