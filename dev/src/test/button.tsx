import React, { useState } from "react"
import { FButton } from "../component/base/button/FButton"

/**
 * 按钮组件测试
 */
export const ButtonTest = function () {
  const [isLoading, setLoading] = useState(false)
  const onClick = () => {
    console.log('加载中...');
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }
  return (<>
    <h1>按钮组件测试</h1>
    <FButton loading={isLoading} onClick={onClick}>下载安装包</FButton>
    <FButton loading={isLoading} onClick={onClick} type="primary"></FButton>
    <FButton loading={isLoading} onClick={onClick} type="danger"></FButton>
    <FButton loading={isLoading} onClick={onClick} type="safe"></FButton>
    <FButton loading={isLoading} onClick={onClick} type="warn"></FButton>
    <FButton loading={isLoading} variant="outline" onClick={onClick}></FButton>
    <FButton loading={isLoading} variant="outline" onClick={onClick} type="primary"></FButton>
    <FButton loading={isLoading} variant="outline" onClick={onClick} type="danger"></FButton>
    <FButton loading={isLoading} variant="outline" onClick={onClick} type="safe"></FButton>
    <FButton loading={isLoading} variant="outline" onClick={onClick} type="warn"></FButton>
    <FButton loading={isLoading} variant="dashed" onClick={onClick}></FButton>
    <FButton loading={isLoading} variant="dashed" onClick={onClick} type="primary"></FButton>
    <FButton loading={isLoading} variant="dashed" onClick={onClick} type="danger"></FButton>
    <FButton loading={isLoading} variant="dashed" onClick={onClick} type="safe"></FButton>
    <FButton loading={isLoading} variant="dashed" onClick={onClick} type="warn"></FButton>
    <FButton loading={isLoading} variant="text" onClick={onClick}></FButton>
    <FButton loading={isLoading} variant="text" onClick={onClick} type="primary"></FButton>
    <FButton loading={isLoading} variant="text" onClick={onClick} type="danger"></FButton>
    <FButton loading={isLoading} variant="text" onClick={onClick} type="safe"></FButton>
    <FButton loading={isLoading} variant="text" onClick={onClick} type="warn"></FButton>
  </>)
}