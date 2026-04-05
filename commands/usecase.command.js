module.exports = (program) => {
  program
    .command("usecase <name>")
    .description("Create a new usecase (not implemented)")
    .action(() => {
      console.log("Usecase generator not implemented yet.");
    });
};