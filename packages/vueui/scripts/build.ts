import fs from "fs-extra";
import path from "path";
import { config } from "../vite.config.js";
import { build, InlineConfig, defineConfig, UserConfig } from "vite";
const buildAll = async () => {

  // // 全量打包
  // await build()

  const baseOutDir = config.build.outDir;
  // 复制 Package.json 文件
  const packageJson = require("../package.json");
  packageJson.main = "xiezijie-ui.umd.js";
  fs.outputFile(
    path.resolve(baseOutDir, `package.json`),
    JSON.stringify(packageJson, null, 2)
  );

  const srcDir = path.resolve(__dirname, "../src/");
  const componentsDir = fs.readdirSync(srcDir).filter((name) => {
    // 只要目录不要文件，且里面包含index.ts
    const componentDir = path.resolve(srcDir, name);
    const isDir = fs.lstatSync(componentDir).isDirectory();
    return isDir && fs.readdirSync(componentDir).includes("index.ts");
  })

  console.log(componentsDir)

  for (let name of componentsDir) {
    const outDir = path.resolve(baseOutDir, name);
    const custom = {
      lib: {
        entry: path.resolve(srcDir, name),
        name, // 导出模块名
        fileName: `index`,
        formats: [`es`, `umd`],
      },
      outDir,
    };

    Object.assign(config.build, custom);
    await build(defineConfig(config as UserConfig) as InlineConfig);

    fs.outputFile(
      path.resolve(outDir, `package.json`),
      `{
        "name": "xiezijie-ui/${name}",
        "main": "index.umd.js",
        "module": "index.umd.js",
      }`,
      `utf-8`
    );
  }
    
  
};

buildAll();