import React from "react"
import styles from './style.module.less'
import { classnames } from "../../../utils/class.util"

type Props = FebProps<{
  showDiv?: boolean
}>
/**
 * 布局组件
 */
export const FLayoutFooter: React.FC<Props> =  function (props) {
  const className = classnames(styles.footer)
  if(props.showDiv){
    className.add(styles['show-div'])
  }
  return <div style={props.style} className={className}>{props.children}</div>
}