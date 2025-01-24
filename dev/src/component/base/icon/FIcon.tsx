import React from "react";
import styles from './style.module.less'
import { FebIconSymbol } from './init'
type Props = FebProps<{
  name: string,
  path: FIconPath | FIconPath[]
}>


/**
 * 图标
 * @author linqin.zhong
 * @date 2025/01/23 21:52:33
 */
export const FIcon = function (props: Props) {
  const symbol = new FebIconSymbol(props.name, props.path)
  const className = [styles.icon, props.className]
  return <svg style={props.style} className={className.join(' ')} aria-hidden="true"><use xlinkHref={`#${symbol.id}`}></use></svg>
}