const generateDto = require("../generator/dto.generator");

module.exports = (program) => {
  program
    .command("dto <name>")
    .description("Create a new DTO (validation schema)")
    .option("-m, --module <moduleName>", "Specify the target module")
    .action((name, options) => {
      if (!options.module) {
        console.error("error: required option '-m, --module <moduleName>' not specified");
        process.exit(1);
      }
      generateDto(name, options.module);
    });
};
