import React, { useState } from 'react'
// @ts-nocheck
// @ts-ignore
import { routes } from './route'
import { NavLink, useRoutes } from 'react-router-dom'
import { FLayout } from '../component/layout/layout/FLayout'
import { FLayoutAside } from '../component/layout/layout/FLayoutAside'
import { FLayoutContent } from '../component/layout/layout/FLayoutContent'
import { FLayoutHead } from '../component/layout/layout/FLayoutHead'
import { FLayoutFooter } from '../component/layout/layout/FLayoutFooter'
import { FButton } from '../component/base/button/FButton'

export const FebRoutes = function () {
    let tag = 0
    const [current, setCurrent] = useState(routes[0].path)
    const [asidePosition, setAsidePosition] = useState<"left" | "right">('left')
    return (
        <div id="feb-ui-demo" style={{
            height: '100vh',
            width: '100vw',
            background: "linear-gradient(to right bottom, var(--text-color-16), var(--text-color-15), var(--text-color-16))",
            overflowY: 'scroll',
            overflowX: 'hidden'
        }}>
            <FLayout style={{
                height: '100%',
                width: '100%',
            }}>
                <FLayoutHead height={50} showDiv style={{ background: 'var(--text-color-16)', justifyContent: 'space-between' }}>
                    <div>FEB-UI组件库 - 开发调试工具</div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <span>侧边栏位置</span>
                        <FButton size='small' shape='circle' type='primary' variant="dashed" onClick={
                            () => {
                                tag = Math.abs(tag - 1)
                                setAsidePosition(tag === 0 ? 'left' : 'right')
                            }
                        }>{asidePosition === 'left' ? '左' : '右'}</FButton>
                    </div>
                </FLayoutHead>
                <FLayoutAside  position={asidePosition} width={200} sticky showDiv style={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        background: 'var(--text-color-16)',
                        lineHeight: 2
                    }
                }>
                    {
                        routes.map(
                            (route: any) => <NavLink key={route.path} onClick={() => setCurrent(route.path)} style={
                                {
                                    width: 'fit-content',
                                    textDecoration: 'none',
                                    color: current === route.path ? 'blue' : 'gray'
                                }
                            } to={route.path}>{route.label}</NavLink>
                        )
                    }
                </FLayoutAside>
                <FLayoutContent>
                    {useRoutes(routes)}
                </FLayoutContent>
                <FLayoutFooter style={{ textAlign: 'center', background: 'var(--text-color-15)', color: 'var(--text-color-5)' }} showDiv>
                    <p>FEB-UI是一个React生态的组件库，巴拉巴拉~</p>
                    <p>copyright © Feb-ui Developer 2025</p>
                </FLayoutFooter>
            </FLayout>
        </div>
    )
}