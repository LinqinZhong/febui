/**
 * 路由配置，本文件由代码生成，请勿修改 
 * @file route.js
 */
import {ShapeTest as Component1} from '../test/button';
import {SizeTest as Component2} from '../test/button';
import {TypeTest as Component3} from '../test/button';
import {VariantTest as Component4} from '../test/button';
import {LoadingTest as Component5} from '../test/button';
import {DebounceThrottleTest as Component6} from '../test/button';
import {IconTest as Component7} from '../test/icon';
import {SpeedTest as Component8} from '../test/loading';
import {DurationTest as Component9} from '../test/loading';
import {ColorTest as Component10} from '../test/loading';
import {FToastTest as Component11} from '../test/toast';
import {QuickTest as Component12} from '../test/toast';
import {DurationTest as Component13} from '../test/toast'
export const routes = [{label: '按钮（FButton）', path: '/button', element: <><h1>按钮（FButton）</h1><div><><h2>不同形状</h2><Component1/></><br/><><h2>不同尺寸</h2><Component2/></><br/><><h2>不同类型</h2><Component3/></><br/><><h2>不同形态</h2><Component4/></><br/><><h2>加载中</h2><Component5/></><br/><><h2>防抖节流</h2><Component6/></></div></>},{label: '图标（Icon）', path: '/icon', element: <><h1>图标（Icon）</h1><div><><h2>图标</h2><Component7/></></div></>},{label: '加载（FLoading）', path: '/loading', element: <><h1>加载（FLoading）</h1><div><><h2>不同速度</h2><Component8/></><br/><><h2>自定义速度</h2><Component9/></><br/><><h2>自定义颜色</h2><Component10/></></div></>},{label: '提示信息（FToast）', path: '/toast', element: <><h1>提示信息（FToast）</h1><div><><h2>不同类型</h2><Component11/></><br/><><h2>快捷调用</h2><Component12/></><br/><><h2>自定义时长（慎用）</h2><Component13/></></div></>}]