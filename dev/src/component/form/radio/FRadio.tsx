import React, { useState } from "react";
import { classnames } from "@/utils/class.util"
import styles from "./style.module.less"
type Props = FebProps<{
    value?: RadioValue
    // value?: boolean
    checked?: boolean
    allowUncheck?: boolean
    disabled?: boolean
    name?: string
    readonly?: boolean
    type?: 'radio' | 'button'
    variant?: 'filled' | 'dashed'

    onChange?: (value: RadioValue, context: {
        e: React.SyntheticEvent
    }) => void
}>

/**
 * Radio单选框
 * @author xiaotong.wen
 * @date 2025/02/07 11:25:53
 */
const FRadio: React.FC<Props> = function (props) {

    const { style, value, checked, allowUncheck = true, disabled = false, readonly = false, type = 'radio', variant = 'dashed', onChange, children } = props

    const [active, setActive] = useState(false)

    const inputClass = [
        styles['radio__input'],
        disabled && styles['disabled'],
        active && styles['active'],
    ]
    const radioClass = [
        styles['radio'],
        active && styles['active'],
        disabled && styles['disabled']
    ]
    const radioButton = [
        styles['radio-button'],
        variant === 'filled' && styles['filled'],
        variant === 'dashed' && styles['dashed'],
        active && styles['active'],
        disabled && styles['disabled']
    ]

    React.useEffect(() => {
        setActive(checked !== undefined ? checked : active)
    }, [checked])


    function handleClick(e: React.SyntheticEvent) {

        if (disabled || readonly) return

        if (active && !allowUncheck) {
            return
        }

        checked === undefined && setActive(!active)

        if (onChange) {
            onChange(!active, { e })
        }

    }


    return (<div style={style ? style : {}} className={classnames(styles['radio-container'])}>
        <input type="radio" className={classnames(styles['radio__form'])} />
        {type === 'radio' ? (
            <div className={classnames(...radioClass)} >
                <span onClick={(e) => handleClick(e)} className={classnames(...inputClass)}></span>
                <span className={classnames(styles['radio__label'])}>{children}</span>
            </div>
        ) : (
            <div className={classnames(...radioButton)} onClick={(e) => handleClick(e)}>
                <span>{children}</span>
            </div>
        )}
    </div>)
}

export default FRadio