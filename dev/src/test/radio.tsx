/**
 * @description 单选框（FRadio）
 * @file radio.tsx
 * @author xiaotong.wen
 */
import React, { useState } from 'react'
import FRadio from '#/form/radio/FRadio'
import FSwitch from '#/form/switch/FSwitch'

// 基础单选框
export const BaseTest = function () {
    return (
        <div style={{ display: "flex", width: '800px', height: '30px', backgroundColor: '#fff', padding: '10px', alignItems: 'center' }}>
            <FRadio checked={false}>未选中</FRadio> &nbsp;&nbsp;
            <FRadio allowUncheck>取消选中</FRadio> &nbsp;&nbsp;
            <FRadio checked>已选中</FRadio> &nbsp;&nbsp;
            <FRadio checked={false} disabled>禁用未选中</FRadio> &nbsp;&nbsp;
            <FRadio checked disabled>禁用已选中</FRadio> &nbsp;&nbsp;
        </div>

    )
}

// 基础配置
export const ConfigTest = function () {

    const [allowUncheck, setAllowUncheck] = useState<boolean>(false)
    const [checked, setChecked] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(false)
    const [readonly, setReadonly] = useState<boolean>(false)

    return (
        <div style={{ display: "flex", width: '800px', height: '120px', backgroundColor: '#fff', padding: '10px' }}>
            <div className="left" style={{ width: "70%", margin: "auto" }}>
                <FRadio allowUncheck={allowUncheck}>allowUncheck</FRadio> <br />
                <FRadio checked={checked} >checked</FRadio> <br />
                <FRadio disabled={disabled} checked={checked}>disabled | checked</FRadio> <br />
                <FRadio readonly={readonly}>readonly</FRadio> <br />
            </div>
            <div className="right" style={{ width: "30%" }}>
                <div className="item" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "30px" }}>
                    <span>allowUncheck</span>
                    <FSwitch onChange={(v) => setAllowUncheck(v as boolean)} size='small' value={allowUncheck}></FSwitch>
                </div>
                <div className="item" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "30px" }}>
                    <span>checked</span>
                    <FSwitch onChange={(v) => setChecked(v as boolean)} size='small' value={checked}></FSwitch>
                </div>
                <div className="item" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "30px" }}>
                    <span>disabled</span>
                    <FSwitch onChange={(v) => setDisabled(v as boolean)} size='small' value={disabled}></FSwitch>
                </div>
                <div className="item" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "30px" }}>
                    <span>readonly</span>
                    <FSwitch onChange={(v) => setReadonly(v as boolean)} size='small' value={readonly}></FSwitch>
                </div>
            </div>
        </div>

    )
}

// 按钮单选框
export const ButtonTest = function () {
    const filledColor = { '--filled-color-inactive': "#13ce66" }
    return <div style={{ display: "flex", width: '800px', height: '40px', backgroundColor: '#fff', padding: '10px', alignItems: 'center' }}>
        <FRadio type='button'>线框样式</FRadio> &nbsp;&nbsp;
        <FRadio type='button' variant='filled' style={filledColor}>填充样式</FRadio> &nbsp;&nbsp;
        <FRadio type='button' variant='filled'>填充样式</FRadio> &nbsp;&nbsp;
        <FRadio type='button' disabled>线框+禁用</FRadio> &nbsp;&nbsp;
        <FRadio type='button' variant='filled' disabled>填充+禁用</FRadio> &nbsp;&nbsp;
        <FRadio type='button' checked disabled>线框+禁用+选中</FRadio> &nbsp;&nbsp;
        <FRadio type='button' variant='filled' disabled checked>填充+禁用+未选中</FRadio> &nbsp;&nbsp;
    </div>
}