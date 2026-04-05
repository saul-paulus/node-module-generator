const generateUsecase = require("../generator/usecase.generator");

module.exports = (program) => {
  program
    .command("usecase <name>")
    .description("Create a new usecase inside an existing module")
    .option("-m, --module <moduleName>", "Specify the target module")
    .action((name, options) => {
      if (!options.module) {
        console.error("error: required option '-m, --module <moduleName>' not specified");
        process.exit(1);
      }
      generateUsecase(name, options.module);
    });
};