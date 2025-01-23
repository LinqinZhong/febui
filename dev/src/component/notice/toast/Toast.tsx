import React, { Component } from "react";

import styles from './toast.module.less'

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
 * 提示消息
 * @author linqin.zhong
 * @date 2025/01/23 13:01:42
 */
export class FToast extends Component<Props> {

    static defaultProps = {
        type: 'default'
    }

    render() {
        const className = [styles.toast]
        if (this.props.died) {
            className.push(styles['toast-died'])
        }
        return (
            <div ref={t => {
                // 销毁动画结束后，销毁当前Toast元素
                t?.addEventListener('transitionend', (e) => {
                    if (e.propertyName === 'margin-top' && this.props.destroy)
                        this.props.destroy(this.props.id)
                })
            }} className={className.join(' ')}>

                {/* 不同类型的icon，现在没有icon，先这样写 */}
                <span>{this.props.type}:</span>

                <span>{this.props.message}</span>
            </div>
        )
    }
}