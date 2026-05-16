import generateResource from "../generator/resource.generator.js";

export default (program) => {
  program
    .command("resource <name>")
    .description("Create a complete resource (CRUD)")
    .action((name) => {
      generateResource(name);
    });
};
