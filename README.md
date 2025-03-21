# FebUi

## 1. Introduction
This is a modern desktop component library built on React 19, developed with TypeScript, providing comprehensive type support. The library includes various categories of components: basic components (buttons, links, etc.), layout components, navigation components, input components, display components, and notification components.If you want to see how do these components work,or learn using them component in your project,<a href="http://febui.intapter.cn/">click here</a> to visit the official website of FebUi.

## 2. Package
- npm (https://www.npmjs.com/package/febui-react)

## 3. Quick Start
### 3.1 Install the package of FebUi
For npm users:
```
npm i febui-react
```
For yarn user:
```
yarn add febui-react
```
### 3.2 Add a style-import on your main script
```ts
import 'febui-react/dist/index.css'
```

### 3.3 Import a component and start your coding
```tsx
import { FButton, toast } from 'febui-react'
const App: React.FC = () => {
  return <FButton onClick={() => {
    toast.success("Hello FebUi!")
  }}>Click me!</FButton>
}
```

## Contributors
<div><a href="https://github.com/TTD-T" alt="TTD-T"><img width="40px;" src="https://avatars.githubusercontent.com/u/159668929"></a>
<a href="https://github.com/LinqinZhong"><img width="40px;" src="https://avatars.githubusercontent.com/u/164827959" alt="LinqinZhong"></a></div>
