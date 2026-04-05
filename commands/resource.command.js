const generateResource = require("../generator/resource.generator");

module.exports = (program) => {
  program
    .command("resource <name>")
    .description("Create a new resource")
    .action((name) => {
      generateResource(name);
    });
};
