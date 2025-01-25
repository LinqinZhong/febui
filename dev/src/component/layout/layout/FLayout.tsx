import React, { ReactElement, ReactNode } from 'react'
import { FLayoutAside, FLayoutAsideProps } from './FLayoutAside'
import { FLayoutHead } from './FLayoutHead'
import { classnames } from '../../../utils/class.util'
import styles from './style.module.less'
import { FLayoutContent } from './FLayoutContent'
import { FLayoutFooter } from './FLayoutFooter'

type Props = FebProps<{
  direction?: 'vertical' | 'horizontal',
  gap?: number
}>
/**
 * 布局组件
 */
export const FLayout: React.FC<Props> = function (props) {
  const {
    direction = 'horizontal',
    gap
  } = props
  const style = { ...props.style }
  if (gap) {
    style.gap = gap
  }
  let head: ReactElement | null = null
  let aside: ReactElement | null = null
  let content: ReactElement | null = null
  let footer: ReactElement | null = null
  const bodyClass = classnames(styles.body)
  const set = (c: ReactElement) => {
    switch (c.type) {
      case FLayoutHead: {
        if (head === null) head = c
        break
      }
      case FLayoutAside: {
        if (aside === null) {
          aside = c
          if ((c as ReactElement<FLayoutAsideProps>).props.position === 'right') {
            bodyClass.add(styles.reverse)
          }
        }
        break
      }
      case FLayoutContent: {
        if (content === null) content = c
        break
      }
      case FLayoutFooter: {
        if (footer === null) footer = c
        break
      }
    }
  }
  if (Array.isArray(props.children)) {
    props.children.forEach((c) => set(c))
  } else {
    set(props.children)
  }
  const inside = !footer && !content
    ? null
    : footer && content ? <div className={styles.inside}>{content}{footer}</div> : [content, footer]
  return (<div style={props.style} className={classnames(styles.layout)}>
    {head}
    <div className={bodyClass}>{aside}{inside}</div>
  </div>)
}