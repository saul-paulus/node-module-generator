#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();

program.name("make").version("1.0.0").description("Clean nodejs CLI");

require("../commands/module.command")(program);
require("../commands/usecase.command")(program);
require("../commands/resource.command")(program);

program.parse();
