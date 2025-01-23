import './iconfont.js'
import React, { Component } from "react";
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
    return (<svg className="icon" aria-hidden="true">
      <use xlinkHref={`#icon-${this.props.name}`}></use>
    </svg>)
  }
}