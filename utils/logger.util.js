const chalk = require("chalk");

class Logger {
  static info(message) {
    console.log(chalk.blue("ℹ INFO: ") + message);
  }

  static success(message) {
    console.log(chalk.green("✔ SUCCESS: ") + message);
  }

  static warn(message) {
    console.log(chalk.yellow("⚠ WARNING: ") + message);
  }

  static error(message, error = null) {
    console.error(chalk.red("✖ ERROR: ") + message);
    if (error) {
      if (error.stack) {
        console.error(chalk.red(error.stack));
      } else {
        console.error(chalk.red(error));
      }
    }
  }

  static step(message) {
    console.log(chalk.cyan("➜ ") + message);
  }
}

module.exports = Logger;
