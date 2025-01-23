import './iconfont.js'
import React, { Component } from "react";
import styles from './style.module.css'

type Props = FebProps<{
  name: FIconName
}>


/**
 * 图标
 * @author linqin.zhong
 * @date 2025/01/23 21:52:33
 */
export class FIcon extends Component<Props> {
  render() {
    const className = [styles.icon,this.props.className]
    return (<svg style={this.props.style} className={className.join(' ')} aria-hidden="true">
      <use xlinkHref={`#icon-${this.props.name}`}></use>
    </svg>)
  }
}