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
          <FButton shape={shape as ButtonShape}>{shape}</FButton>
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
          <FButton size={size as ButtonSize}>{size}</FButton>
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
          <FButton type={type as ButtonType}>{type}</FButton>
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
          <FButton variant={variant as ButtonVariant}>{variant}</FButton>
        ))}
      </div>
    </>
  )
}

export const LoadingTest = function () {
  const [isLoading1, setLoading1] = useState(false)
  const [isLoading2, setLoading2] = useState(false)
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
    </div>)}
  </>)
}