import React, { Component } from 'react'
import styles from './style.module.less'
import { isFunction, isNumber } from '../../../utils/type-util'
import debounce from 'lodash.debounce'
import throttle from 'lodash.throttle'
import { isUndefined } from '../../../utils/type-util'
import { FLoading } from '../loading/FLoading'


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
  debounce?: number | debounceFn
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
 * @example
 * <FButton debounce={200} type="primary">提交
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
    if (!isUndefined(this.props.debounce) && !isUndefined(this.props.throttle)) {
      // 不能同时使用节流和防抖，默认采用防抖
      console.warn('Not allowed use `debounce` and `throttle` at the same time, ignoring throttle.');
    }
    if (isFunction(this.props.debounce)) {
      // 用户自定义防抖函数
      this.onClick = this.props.debounce as debounceFn
    } else if (isNumber(this.props.debounce)) {
      // 创建防抖函数
      this.onClick = debounce(() => {
        if (this.props.onClick) this.props.onClick()
      }, Math.max(0, this.props.debounce as number))
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