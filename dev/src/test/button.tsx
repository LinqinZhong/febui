/**
 * @description 按钮（FButton）
 * @file button.tsx
 * @author linqin.zhong
 */

import React, { useState } from "react"
import { FButton } from "../component/base/button/FButton"

export const ShapeTest = function () {
  return (
    <>
      <h2>不同形状</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {['round', 'square', 'rectangle', 'circle'].map(shape => (
          <FButton key={shape} shape={shape as ButtonShape}>{shape}</FButton>
        ))}
      </div>
    </>
  )
}

export const SizeTest = function () {
  return (
    <>
      <h2>不同尺寸</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {['small', 'medium', 'large'].map(size => (
          <FButton key={size} size={size as ButtonSize}>{size}</FButton>
        ))}
      </div>
    </>
  )
}

export const TypeTest = function () {
  return (
    <>
      <h2>不同类型</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {['default', 'primary', 'danger', 'safe', 'warn'].map(type => (
          <FButton key={type} type={type as ButtonType}>{type}</FButton>
        ))}
      </div>
    </>
  )
}

export const VariantTest = function () {
  return (
    <>
      <h2>不同形态</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {['base', 'outline', 'dashed', 'text'].map(variant => (
          <FButton key={variant} variant={variant as ButtonVariant}>{variant}</FButton>
        ))}
      </div>
    </>
  )
}

export const LoadingTest = function () {
  const [isLoading1, setLoading1] = useState(false)
  const [isLoading2, setLoading2] = useState(false)
  const [isLoading3, setLoading3] = useState(false)
  const onClick = (setLoading: ActionFn) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }
  return (<>
    <h2>加载中</h2>
    {(<div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
      <FButton loading={isLoading1} onClick={onClick.bind(null, setLoading1)} type='default'>点我加载</FButton>
      <FButton loading={isLoading2} onClick={onClick.bind(null, setLoading2)} type='primary'>点我加载</FButton>
      <FButton loading={isLoading3} onClick={onClick.bind(null, setLoading3)} type='warn' variant="text">点我加载</FButton>
    </div>)}
  </>)
}

let n1 = 0
let n2 = 0
let n3 = 0
export const DebounceTest = function () {
  const [num1, setNum1] = useState(n1)
  const [num2, setNum2] = useState(n2)
  const [num3, setNum3] = useState(n3)
  const onClick1 = () => setNum1(++n1)
  const onClick2 = () => setNum2(++n2)
  const onClick3 = () => setNum3(++n3)
  return (<>
    <h2>防抖</h2>
    <div>疯狂点击下面按钮试试</div>
    <br></br>
    {(<div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
      <FButton onClick={onClick1} type='danger' variant="dashed">{num1}+1</FButton>
      <FButton debounce={500} onClick={onClick2} type='primary' variant="dashed">{num2}+1（防抖）</FButton>
      <FButton throttle={500} onClick={onClick3} type='safe' variant="dashed">{num3}+1（节流）</FButton>
    </div>)}
  </>)
}