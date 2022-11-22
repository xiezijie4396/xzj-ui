import fs from "fs";
import handlebars from "handlebars";

/**
 * 编译模板文件
 * @param meta 数据定义
 * @param filePath 目标文件路径
 * @param templatePath 模板文件路径
 */
export default function compile(meta, filePath, templatePath) {
  console.log(templatePath)
  if (fs.existsSync(templatePath)) {
    const content = fs.readFileSync(templatePath).toString();
    const result = handlebars.compile(content)(meta);
    fs.writeFileSync(filePath, result);
    // 删除package.hbs.json
    fs.rmSync(templatePath)
    // console.log(`📚 ${filePath} 修改成功`);
  } else {
    // console.log(`❌ ${filePath} 修改失败`);
  }
}