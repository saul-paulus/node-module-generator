import generateModule from "../generator/module.generator.js";

export default (program) => {
  program
    .command("module <name>")
    .description("Create a new module")
    .action((name) => {
      generateModule(name);
    });
};
