const generateModule = require("../generator/module.generator");

module.exports = (program) => {
  program
    .command("module <name>")
    .description("Create a new module")
    .action((name) => {
      generateModule(name);
    });
};
