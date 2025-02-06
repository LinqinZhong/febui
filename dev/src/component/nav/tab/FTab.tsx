import React, { useEffect, useState } from "react";
import { classnames } from "@/utils/class.util"
import styles from "./style.module.less"
import { debounce } from "lodash";
import { FIconNext } from "+/FIconNext";
import { FIconBack } from "+/FIconBack";
type Props = FebProps<{
    options: FTabOption[],
    value: FTabOptionValue,
    onChange?: (v: FTabOptionValue) => void
}>
/**
 * 我的组件
 * @author linqin.zhong
 * @date 2025/02/06 11:05:35
 */

export const FTab: React.FC<Props> = function (props) {
    const [underlineWidth, setUnderlineWidth] = useState(0)
    const [underlineLeft, setUnderlineLeft] = useState(0)
    const [showNav, setShowNav] = useState(false)
    let ref: HTMLDivElement | null = null
    let scroll: HTMLDivElement | null = null
    let allWidth = 0

    /**
     * 滚动
     * @param delta - 位移
     */
    const handleScroll = (delta: number) => {
        scroll?.scrollTo(
            {
                left: scroll.scrollLeft + delta
            }
        )
    }

    // 大小变化监听器
    const observer = new ResizeObserver(debounce((e) => {
        if (e[0].target.clientWidth < allWidth && !showNav) {
            setShowNav(true)
        } else if (e[0].target.clientWidth >= allWidth && showNav) {
            setShowNav(false)
        }
    }, 10))

    // 组件渲染完成后再开启过渡动画
    setTimeout(() => ref && (ref.style.transition = '0.2s'), 0);

    return (
        <div className={classnames(styles['tabs-wrapper'])}>
            {showNav && <>
                <FIconBack onClick={handleScroll.bind(null, -100)} className={classnames(styles['nav'], styles['pre'])} />
                <FIconNext onClick={handleScroll.bind(null, 100)} className={classnames(styles['nav'], styles['next'])} />
            </>}
            <div ref={(el) => {
                if (el) {
                    observer.observe(el)
                    if (showNav) {
                        scroll = el
                        el.addEventListener('wheel', (e) => {
                            el.scrollTo({
                                left: el.scrollLeft + e.deltaY / 8000 * e.timeStamp
                            })
                        }, {
                            passive: false
                        })
                    }
                }
            }} className={styles['scroll']}>
                <div className={classnames(styles['tabs'])}>
                    {
                        props.options?.map((option) => {
                            return <div key={option.value} ref={(el) => {
                                if (!el) return
                                allWidth += el.clientWidth
                                if (option.value === props.value) {
                                    setUnderlineLeft(el.offsetLeft)
                                    setUnderlineWidth((el.clientWidth))
                                }
                            }} className={classnames(styles['tab-item'],props.value === option.value && styles['is-active'])} onClick={() => {
                                props.onChange && props.onChange(option.value)
                            }}>
                                <span>{option.label}</span>
                            </div>
                        })
                    }
                    <div ref={(r) => {
                        ref = r
                    }} style={
                        { width: underlineWidth, transform: `translateX(${underlineLeft}px)` }
                    } className={classnames(styles['underline'])}></div>
                </div >
            </div>
        </div>
    )
}