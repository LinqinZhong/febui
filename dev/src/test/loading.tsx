/**
 * @description 加载（FLoading）
 * @file button.tsx
 * @author linqin.zhong
 */

import React from "react"
import { FLoading } from "../component/base/loading/FLoading"

export const Button = function () {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 50 }}>
      <div>
        <span>默认状态</span>
        <FLoading />
      </div>
      <div>
        <span>快</span>
        <FLoading speed="fast" />
      </div>
      <div>
        <span>慢</span>
        <FLoading speed="slow" />
      </div>
      <div>
        <span>2秒/圈</span>
        <FLoading duration={2000} />
      </div>
      <div>
        <span>改变颜色</span>
        <FLoading style={{ color: 'red' }} />
        <FLoading style={{ color: 'blue' }} />
      </div>
    </div>
  )
}

