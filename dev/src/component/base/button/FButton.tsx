import React, { Component } from 'react'
import styles from './style.module.less'
import { isFunction, isNumber } from '../../../utils/type-util'
import debounce from 'lodash.debounce'
import throttle from 'lodash.throttle'
import { isUndefined } from 'lodash'
import { FLoading } from '../loading/FLoading'

// 按钮类型
type ButtonType = 'primary' // 主题色
  | 'default'  // 默认
  | 'warn'     // 警告
  | 'danger'   // 危险
  | 'safe'     // 安全
// 按钮形态
type ButtonVariant = 'base' // 填充
  | 'outline'  // 实线边框
  | 'dashed'  // 虚线边框
  | 'text'  //纯文本
// 按钮形状
type ButtonShape = 'round' // 圆角
  | 'rectangle' // 矩形
  | 'circle'   // 圆形
  | 'sqaure'  // 正方形
// 按钮大小
type ButtonSize = 'medium' // 中等
  | 'large' // 大
  | 'small' // 小
// 组件属性
type Props = FebProps<{
  // 类型
  type?: ButtonType
  // 形态
  variant?: ButtonVariant
  // 形状
  shape?: ButtonShape
  // 大小
  size?: ButtonSize
  // 防抖
  deboundce?: number | DeboundceFn
  // 节流
  throttle?: number | ThrottleFn
  // 加载中
  loading?: boolean
  // 点击事件
  onClick?: ActionFn
}>

/**
 * 按钮组件
 * @author linqin.zhong
 * @date 2025/01/19 15:07:33
 * @exampl
 * <FButton deboundce={200} type="primary">提交
 * </FButton>
 */
export class FButton extends Component<Props> {

  private onClick?: ActionFn

  static defaultProps = {
    variant: 'base',
    type: 'default',
    shape: 'round',
    size: 'medium',
    loading: false
  }

  constructor(props: Props) {
    super(props)
    this.initOnClick()
  }
  /**
   * 初始化点击事件
   */
  initOnClick() {
    if (!isUndefined(this.props.deboundce) && !isUndefined(this.props.throttle)) {
      // 不能同时使用节流和防抖，默认采用防抖
      console.warn('Not allowed use `debounce` and `throttle` at the same time, ignoring throttle.');
    }
    if (isFunction(this.props.deboundce)) {
      // 用户自定义防抖函数
      this.onClick = this.props.deboundce as DeboundceFn
    } else if (isNumber(this.props.deboundce)) {
      // 创建防抖函数
      this.onClick = debounce(() => {
        if (this.props.onClick) this.props.onClick()
      }, Math.max(0, this.props.deboundce as number))
    } else if (isFunction(this.props.throttle)) {
      // 用户自定义节流函数
      this.onClick = this.props.throttle as ThrottleFn
    } else if (isNumber(this.props.throttle)) {
      // 创建节流函数
      this.onClick = throttle(() => {
        if (this.props.onClick) this.props.onClick()
      }, Math.max(0, this.props.throttle as number))
    } else {
      // 不做防抖和节流
      this.onClick = this.props.onClick
    }
  }
  render() {
    const className = [
      styles.button,
      styles[this.props.variant as string],
      styles[this.props.type as string],
      styles[this.props.shape as string],
      styles[this.props.size as string]
    ]
    const handleClick = () => {
      if (this.props.loading) return
      if (this.onClick) {
        this.onClick()
      }
    }
    const loading = this.props.loading ? <FLoading  className={styles.loading} /> : null
    return (
      <div className={className.join(' ')} onClick={handleClick}>
        {loading}
        <span>{this.props.children || '确定'}</span>
      </div>
    );
  }
}