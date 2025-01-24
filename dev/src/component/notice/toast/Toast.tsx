import React, { Component, ElementType } from "react";

import styles from './toast.module.less'
import { FIconError } from "../../icons/FIconError";
import { FIconSuccessCircle } from "../../icons/FIconSuccessCircle";
import { FIconFailCircle } from "../../icons/FIconFailCircle";

type Props = FebProps<{
    // 消息ID
    id: number,
    // 消息类型
    type?: FToastType,
    // 消息是否死亡
    died?: boolean,
    // 消息内容
    message: string,
    // 销毁消息函数
    destroy?: (id: number) => void
}>
/**
 * 不同类型icon的组件
 */
const ICON_MAP:{
    [key: string]: ElementType
} = {
    'info': FIconError,
    'fail': FIconFailCircle,
    'success': FIconSuccessCircle,
    'warn': FIconError,
    'error': FIconError
}
/**
 * 提示消息
 * @author linqin.zhong
 * @date 2025/01/23 13:01:42
 */
export class FToast extends Component<Props> {

    static defaultProps = {
        type: 'info'
    }

    render() {
        const className = [styles.toast]
        if (this.props.died) {
            className.push(styles['toast-died'])
        }

        const iconClassName = [
            styles['toast-icon'],
            styles[this.props.type as string]
        ]
        const ToastIcon = ICON_MAP[this.props.type as string]
        return (
            <div ref={t => {
                // 销毁动画结束后，销毁当前Toast元素
                t?.addEventListener('transitionend', (e) => {
                    if (e.propertyName === 'margin-top' && this.props.destroy)
                        this.props.destroy(this.props.id)
                })
            }} className={className.join(' ')}>
                <ToastIcon className={iconClassName.join(" ")} />
                <span>{this.props.message}</span>
            </div>
        )
    }
}