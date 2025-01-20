const path = require('path')
const fs = require('fs')
const dirPath = path.resolve(__dirname,'./src')
const vscodePath = path.resolve(__dirname,'../.vscode')
if(!fs.existsSync(vscodePath)){
    fs.mkdirSync(vscodePath)
}
const author = process.env.npm_config_author

if(!author){
    console.log('代码片段创建失败，请指定作者（author）！');
    return
}

const fileNames = fs.readdirSync(dirPath)
fileNames.forEach((fileName) => {
    const srcPath = path.resolve(dirPath,fileName)
    let value = String(fs.readFileSync(srcPath))
    const targetPath = path.resolve(vscodePath,fileName)
    value = value.replaceAll(/\$\{AUTHOR\}/g,author)
    fs.writeFileSync(targetPath, value)
})
console.log('代码片段生成成功');
