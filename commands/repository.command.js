import generateRepository from "../generator/repository.generator.js";

export default (program) => {
  program
    .command("repository <name>")
    .description("Create a new repository inside an existing module")
    .action((name) => {
      generateRepository(name);
    });
};
