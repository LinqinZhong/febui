import React, { useState } from "react";
import types from './style.module.less'
import { classnames } from "../../utils/class.util";
import { FIconNext } from "../icons/FIconNext";
type Props = FebProps<{
  items: FMenuItem[],
  group?: boolean,
  collapsed?: boolean,
  default?: string
  onChange?: (name: string) => void
}>
/**
 * 菜单组件
 * @author linqin.zhong
 * @date 2025/01/27 14:10:13
 */
export const FMenu: React.FC<Props> = function (props) {
  // 一级展开项
  const [openItems1, setOpenItems1] = useState<string[]>([])
  // 二级展开项
  const [openItems2, setOpenItems2] = useState<string[]>([])
  // 活跃项
  const [activeItem, setActiveItem] = useState<string[]>([])
  // 获取菜单项图标
  const getIcon = (item: FMenuItem, className: string) => {
    if (item.icon) {
      const Icon = item.icon
      return <Icon className={className}></Icon>
    }
  }
  // 设置菜单展开状态
  const setOpen = (openItems: string[], set: (name: string[]) => void, name: string) => {
    if (props.collapsed) return
    if (openItems.includes(name)) set(openItems.filter(i => i !== name))
    else set([...openItems, name])
  }
  // 设置活跃项
  const setActive = (names: string[]) => {
    if (props.onChange) {
      props.onChange(names[names.length - 1])
    }
    setActiveItem(names)
  }
  // 解析菜单项
  const parseItems = (items: FMenuItem[]) => {
    return items.map((item) => {
      // 设置默认活跃项
      if (item.name === props.default && !item.children && activeItem.length === 0) setActiveItem([item.name])
      // 菜单是否禁用（设置了disabled 或 有孩子容器但孩子为空）
      const disabled = item.disabled || item.children && item.children.length === 0
      return (<div className={
        classnames(
          types['menu-item'],
          // 是否有孩子
          item.children && types['has-children'],
          // 是否禁用
          disabled
            // 禁用时选择禁用样式
            ? types['menu-item-empty-children']
            // 无禁用时，判断是否为展开项
            : openItems1.includes(item.name) && !props.collapsed
              // 展开时选择展开样式
              ? types['menu-item-open']
              // 无展开时，判断该项或其孩子是否为激活项，是则选择激活样式
              : activeItem.includes(item.name) && types['menu-item-active']
        )
      }
        key={item.name}>
        <div onClick={
          // 判断是否有孩子
          item.children
            // 有孩子时点击后展开该项子菜单
            ? setOpen.bind(null, openItems1, setOpenItems1, item.name)
            // 无孩子点击后激活该项
            : setActive.bind(null, [item.name])
        } className={types['menu-item-head']}>
          <div className={types['menu-item-label']}>
            {getIcon(item, types['menu-item-icon'])}
            <span>{item.label}</span>
          </div>
          {item.children && <FIconNext className={types['menu-item-next']}></FIconNext>}
        </div>

        {/* 二级菜单 */}
        <div className={types['second-menu']}>
          {
            item.children && item.children.map((c) => {
              // 设置默认活跃项
              if (c.name === props.default && !c.children && activeItem.length === 0) {
                setActiveItem([item.name, c.name])
                setOpenItems1([item.name])
              }
              // 菜单是否禁用（设置了disabled 或 有孩子容器但孩子为空）
              const disabled = c.disabled || c.children && c.children.length === 0
              return (
                <div className={classnames(
                  types['second-item'],
                  // 是否有孩子
                  c.children && types['has-children'],
                  // 是否禁用
                  disabled
                    // 禁用时选择禁用样式
                    ? types['second-item-empty-children']
                    // 无禁用时，判断是否为展开项
                    : openItems2.includes(c.name) && !props.collapsed
                      // 展开时选择展开样式
                      ? types['second-item-open']
                      // 无展开时，判断该项或其孩子是否为激活项，是则选择激活样式
                      : activeItem.includes(c.name) && types['second-item-active']

                )} key={c.name}>
                  <div onClick={
                    // 判断是否有孩子
                    c.children
                      // 有孩子时点击后展开该项子菜单
                      ? setOpen.bind(null, openItems2, setOpenItems2, c.name)
                      // 无孩子点击后激活该项
                      : setActive.bind(null, [item.name, c.name])
                  } className={types['second-item-head']}>
                    <div className={types['second-item-label']}>
                      {getIcon(c, types['second-item-icon'])}
                      <span>{c.label}</span>
                    </div>
                    {c.children && <FIconNext className={types['second-item-next']}></FIconNext>}
                  </div>

                  {/* 三级菜单 */}
                  <div className={types['third-menu']}>
                    {
                      c.children && c.children.map((cc) => {
                        // 菜单是否禁用（设置了disabled）
                        const disabled = cc.disabled
                        // 设置默认活跃项
                        if (cc.name === props.default && activeItem.length === 0) {
                          setActiveItem([item.name, c.name, cc.name])
                          setOpenItems1([item.name])
                          setOpenItems2([c.name])
                        }
                        return (<div className={
                          classnames(
                            types['third-item'],
                            disabled && types['third-item-disabled'],
                            activeItem.includes(cc.name) && types['is-active']
                          )} key={cc.name}>
                          <div
                            onClick={setActive.bind(null, [item.name, c.name, cc.name])}
                            className={types['third-item-head']}
                          >
                            {cc.label}
                          </div>
                        </div>)
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>)
    })
  }
  return (
    /* 一级菜单 */
    <div style={props.style} className={classnames(
      types.menu,
      props.collapsed && types['menu-collapsed'],
      props.className
    )}>
      {
        // 按【是否显示分组】进行不同方案渲染
        props.group
          // 渲染分组后再渲染菜单项
          ? props.items.map((group) => (<div className={types['menu-group']} key={group.name}>
            <div className={types['menu-group-label']} >{group.label}</div>
            {group.children && parseItems(group.children)}
          </div>))
          // 只渲染菜单项
          : parseItems(props.items)
      }
    </div>
  )

}