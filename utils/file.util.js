const fs = require("fs-extra");
const path = require("path");
const ejs = require("ejs");
const logger = require("./logger.util");

class FileUtil {
  /**
   * Ensure directories exist.
   * @param {string} basePath Base directory path
   * @param {string[]} dirs Array of relative directory paths
   */
  static ensureDirectories(basePath, dirs) {
    dirs.forEach((dir) => {
      const fullPath = path.join(basePath, dir);
      fs.ensureDirSync(fullPath);
    });
  }

  /**
   * Render EJS template and write to an output path.
   * @param {string} templatePath Template path relative to templates folder
   * @param {Object} data Template data
   * @param {string} outputPath Target output path relative to basePath
   */
  static async renderAndWrite(templatePath, data, outputPath) {
    try {
      const absoluteTemplatePath = path.join(__dirname, "../templates", templatePath);
      const templateContent = await ejs.renderFile(absoluteTemplatePath, data);
      fs.writeFileSync(outputPath, templateContent);
      logger.step(`Created ${path.basename(outputPath)}`);
    } catch (error) {
      logger.error(`Failed to process template: ${templatePath}`, error);
      throw error;
    }
  }
}

module.exports = FileUtil;
