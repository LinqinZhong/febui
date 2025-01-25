import React from "react"
import styles from './style.module.less'
import { classnames } from "../../../utils/class.util"

export type FLayoutAsideProps = FebProps<{
  position?: 'left' | 'right',
  showDiv?: boolean
}, HTMLDivElement>
/**
 * 布局组件
 */
export const FLayoutAside: React.FC<FLayoutAsideProps> = function (
  { position = 'left',
    showDiv,
    style,
    children
  }
) {
  const className = classnames(styles.aside)
  if (showDiv) {
    className.add(styles[`show-div-${position}`])
  }
  return <div style={style} className={className}>{children}</div>
}