import React, { useState } from 'react'
// @ts-nocheck
// @ts-ignore
import { routes } from './route'
import { NavLink, useRoutes } from 'react-router-dom'

export const FebRoutes = function () {
    const [current, setCurrent] = useState(routes[0].path)
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            overflow: 'auto',
        }}>
            <div style={
                {
                    flexShrink: 0,
                    display: 'flex',
                    padding: 20,
                    flexDirection: 'column',
                    background: 'white',
                    boxShadow: '1px 1px 1px #EDEDED',
                    position: 'sticky',
                    left: 0,
                    top: 0,
                    gap: 10,
                    overflowX: 'hidden',
                    overflowY: 'auto',
                }
            }>
                {
                    routes.map(
                        (route: any) => <NavLink onClick={() => setCurrent(route.path)} style={
                            {
                                width: 'fit-content',
                                textDecoration: 'none',
                                color: current === route.path ? 'blue' : 'gray'
                            }
                        } to={route.path}>{route.label}</NavLink>
                    )
                }
            </div>
            <div style={{ padding: 10, marginLeft: 20 }}>
                {useRoutes(routes)}
            </div>
        </div>
    )
}