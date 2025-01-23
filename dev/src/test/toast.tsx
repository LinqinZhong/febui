/**
 * @description 提示信息（FToast）
 * @file xxx.tsx
 * @author linqin.zhong
 * @date 2025/01/23 13:07:12
*/
import React from "react"
import { FButton } from "../component/base/button/FButton"
import { toast } from "../api/toast"

// 不同类型
export const FToastTest = function () {
    const showToast = (type: FToastType) => {
        toast(type, {
            type
        })
    }
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['default', 'primary', 'danger', 'safe', 'warn'].map(type => (
                    <FButton
                        variant='dashed'
                        key={type}
                        type={type as ButtonType}
                        onClick={showToast.bind(null, type as FToastType)}
                    >
                        {type}
                    </FButton>
                ))}
            </div>
        </>
    )
}

// 快捷调用
export const QuickTest = function () {
    const handleSuccess = () => toast.success('成功')
    const handleError = () => toast.error('错误')
    const handleWarn = () => toast.warn('警告')
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                <FButton onClick={handleSuccess}>toast.success</FButton>
                <FButton onClick={handleError}>toast.error</FButton>
                <FButton onClick={handleWarn}>toast.warn</FButton>
            </div>
        </>
    )
}

// 自定义时长（慎用）
export const DurationTest = function () {
    const onClick = (d: number) => toast(d + 'ms', { duration: d })
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {
                    [1000, 2000, 3000, 4000, 5000].map((d => (
                        <FButton onClick={onClick.bind(null, d)}>{d}ms</FButton>
                    )))
                }
            </div>
        </>
    )
}