#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();

program.name("nmg").version("1.0.0").description("Clean nodejs CLI");

require("../commands/module.command")(program);
require("../commands/usecase.command")(program);
require("../commands/resource.command")(program);
require("../commands/repository.command")(program);
require("../commands/dto.command")(program);

program.parse();
