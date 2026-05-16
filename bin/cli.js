#!/usr/bin/env node

import { Command } from "commander";
import moduleCommand from "../commands/module.command.js";
import usecaseCommand from "../commands/usecase.command.js";
import resourceCommand from "../commands/resource.command.js";
import repositoryCommand from "../commands/repository.command.js";
import dtoCommand from "../commands/dto.command.js";

const program = new Command();

program.name("nmg").version("1.0.0").description("Clean nodejs CLI");

process.on("unhandledRejection", (err) => {
  console.error("✖ FATAL ERROR: ", err.stack || err);
  process.exit(1);
});

moduleCommand(program);
usecaseCommand(program);
resourceCommand(program);
repositoryCommand(program);
dtoCommand(program);

program.parse();
