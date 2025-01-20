# FEB-UI 源码
## 一、贡献者
- linqin.zhong（2952868313@qq.com）

## 二、目录结构
+ dev - 通用组件源码根目录
  + node_modules
  + public
  + src
    + component - 组件目录
      + base - 基础组件
        + button - 按钮
        + link - 文本链接
      + display - 数组展示组件
      + input - 输入组件
      + layout - 布局组件
      + nav - 导航组件
      + notice - 消息提醒组件
    + hooks - 钩子目录
    + test  - 测试目录
    + theme - 主题目录
      + cannon - 经典主题
        + style - 样式目录
        + index.ts - 主题入口
  + craco.config.js
  + package.json
  + README.md
  + tsconfig.json

## 三、通用组件开发流程
### (一) 准备工作
#### 1. 切换到：```node.js >= 21```
#### 2. 在【项目根目录】下执行以下脚本，安装依赖
```shell
npm install
```
#### 3. 创建常用代码片段（Snippets）
- 为规范代码风格，加快编码速度，建议在工程下创建代码片段
- 在根目录下执行```npm run snippets --author=<作者>```生成代码片段
##### 3.1 组件代码片段（component）
- ```dc``` - 定义组件
- ```dcc``` - 定义组件-带构造器
#### 3.2 样式代码片段（style）
- ```dc``` - 创建新样式
#### 3.3 调试代码片段（test）
- ```dt``` - 创建调试页