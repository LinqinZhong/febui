/**
 * @file generate.js
 * @description 根据./src/test目录下的文件生成路由配置，生成的文件路径为./src/route/routes.js
 * @example
 * node generate.js
 */
const fs = require("fs");
const path = require("path");
const dirPath = path.resolve(__dirname, "../test");
const dirs = fs.readdirSync(dirPath);
const imports = [];
const routes = [];
let id = 1;
const onProcess = (i) => {
    console.clear()
    console.log('解析生成路由',parseFloat(i*100).toFixed(2)+'%');
}
dirs.forEach((fileName,i) => {
  onProcess((i+1)/dirs.length)
  const p = path.resolve(dirPath, fileName);
  const value = String(fs.readFileSync(p));
  const i0 = value.indexOf("@description ") + 13;
  const name = fileName.replace(".tsx", "");
  const label = i0 !== -1 ? value.substring(i0, value.indexOf("\n", i0)).replaceAll(/[\r|\n|\s+]/g,'') : name;
  const ip = "../test/" + name;
  const exports = value.matchAll(/export\s+const\s+[A-Z][a-zA-Z0-9]*/g);
  const components = [];
  for (let export0 of exports) {
    const cname = `Component${id++}`;
    let v = export0[0];
    v = v.replace(/export\s+const\s/g, "");
    imports.push(`import {${v} as ${cname}} from '${ip}'`);
    components.push(cname);
  }
  const element = `<><h1>${label}</h1><div>${components.map((c) => `<${c}/>`).join()}</div></>`;
  routes.push(`{label: '${label}', path: '/${name}', element: ${element}}`);
});
const res = `/**\n * 路由配置，本文件由代码生成，请勿修改 \n * @file route.js\n */\n${imports.join(';\n')}\nexport const routes = [${routes.join(',')}]`
fs.writeFileSync(path.resolve(__dirname,'route.js'),res)
console.log('路由生成完成');