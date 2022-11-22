// import clone from "../utils/clone.js";
import compile from '../utils/compile.js'
import copy from '../utils/copy.js'
import inquirer from "inquirer";
import path from 'path'
import { __dirname } from '../utils/filename.js'

import chalk from "chalk";
const log = (...args) => console.log(chalk.green(...args));

export default async () => {
  const { name } = await inquirer.prompt([{
    type: "input" /* 选择框 */ ,
    message: "请输入项目的名称？",
    name: "name",
  },]);

  console.log("🚌 创建项目:" + name);

  // 从github克隆项目到指定文件夹
  // await clone("github:smarty-team/smarty-ui-app-js-template", name);
  copy(path.join(__dirname, '../../template'), name)

  // 生成路由定义
  compile({ name },
    `./${name}/package.json`,
    `./${name}/package.hbs.json`
  );

  log(`
👌 安装完成：
To get Start:
===========================
cd ${name}
npm i
npm run dev
===========================
            `);
};

