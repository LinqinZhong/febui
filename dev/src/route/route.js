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
import {DefaultTest as Component8} from '../test/layout';
import {ASideTest as Component9} from '../test/layout';
import {DivTest as Component10} from '../test/layout';
import {Test1 as Component11} from '../test/layout';
import {Test2 as Component12} from '../test/layout';
import {Test3 as Component13} from '../test/layout';
import {SpeedTest as Component14} from '../test/loading';
import {DurationTest as Component15} from '../test/loading';
import {ColorTest as Component16} from '../test/loading';
import {FMenuTest as Component17} from '../test/menu';
import {GroupTest as Component18} from '../test/menu';
import {FMenuIconTest as Component19} from '../test/menu';
import {CollapseTest as Component20} from '../test/menu';
import {FToastTest as Component21} from '../test/toast';
import {ClostTest as Component22} from '../test/toast';
import {ApiTest as Component23} from '../test/toast';
import {QuickTest as Component24} from '../test/toast'
export const routes = [{label: '按钮（FButton）', path: '/button', element: <><h1>按钮（FButton）</h1><div><><h2>不同形状</h2><Component1/></><br/><><h2>不同尺寸</h2><Component2/></><br/><><h2>不同类型</h2><Component3/></><br/><><h2>不同形态</h2><Component4/></><br/><><h2>加载中</h2><Component5/></><br/><><h2>防抖节流</h2><Component6/></></div></>},{label: '图标（Icon）', path: '/icon', element: <><h1>图标（Icon）</h1><div><><h2>图标</h2><Component7/></></div></>},{label: '布局组件（FLayout）', path: '/layout', element: <><h1>布局组件（FLayout）</h1><div><><h2>默认</h2><Component8/></><br/><><h2>侧边栏在右侧</h2><Component9/></><br/><><h2>显示边界</h2><Component10/></><br/><><h2>只显示顶部和内容区</h2><Component11/></><br/><><h2>只显示侧边栏和内容区</h2><Component12/></><br/><><h2>只显示底部和内容区</h2><Component13/></></div></>},{label: '加载（FLoading）', path: '/loading', element: <><h1>加载（FLoading）</h1><div><><h2>不同速度</h2><Component14/></><br/><><h2>自定义速度</h2><Component15/></><br/><><h2>自定义颜色</h2><Component16/></></div></>},{label: '菜单（FMenu）', path: '/menu', element: <><h1>菜单（FMenu）</h1><div><><h2>基础使用</h2><Component17/></><br/><><h2>带分组</h2><Component18/></><br/><><h2>带图标</h2><Component19/></><br/><><h2>可折叠</h2><Component20/></></div></>},{label: '提示信息（FToast）', path: '/toast', element: <><h1>提示信息（FToast）</h1><div><><h2>组件使用</h2><Component21/></><br/><><h2>关闭和显示</h2><Component22/></><br/><><h2>Api调用</h2><Component23/></><br/><><h2>Api快捷调用</h2><Component24/></></div></>}]