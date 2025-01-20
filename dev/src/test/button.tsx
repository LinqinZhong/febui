/**
 * @description 按钮（FButton）
 * @file button.tsx
 * @author linqin.zhong
 */

import React, { useState } from "react"
import { FButton } from "../component/base/button/FButton"

export const Button = function () {
  const [isLoading, setLoading] = useState(false)
  const onClick = () => {
    console.log('加载中...');
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }
  const elements = []
  for (const variant of ['base', 'outline', 'dashed', 'text']) {
    for (const type of ['default', 'primary', 'danger', 'safe', 'warn']) {
      elements.push(
        // @ts-nocheck
        // @ts-ignore
        <FButton loading={isLoading} onClick={onClick} variant={variant} type={type}>提交</FButton>
      )
    }
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
      {elements}
    </div>
  )
}