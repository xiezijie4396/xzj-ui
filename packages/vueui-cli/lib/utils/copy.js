import fs from "fs";
import ora from "ora";

export default function copy(templatePath, targetPath) {
  const process = ora(`下载...`);
  process.start();
  fs.cpSync(templatePath, targetPath, { recursive: true })
  process.succeed();
}