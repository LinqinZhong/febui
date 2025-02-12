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
import {FDialogTest as Component7} from '../test/dialog';
import {HeaderTest as Component8} from '../test/dialog';
import {FooterTest as Component9} from '../test/dialog';
import {IconTest as Component10} from '../test/icon';
import {DefaultTest as Component11} from '../test/layout';
import {ASideTest as Component12} from '../test/layout';
import {DivTest as Component13} from '../test/layout';
import {Test1 as Component14} from '../test/layout';
import {Test2 as Component15} from '../test/layout';
import {Test3 as Component16} from '../test/layout';
import {SpeedTest as Component17} from '../test/loading';
import {DurationTest as Component18} from '../test/loading';
import {ColorTest as Component19} from '../test/loading';
import {FMenuTest as Component20} from '../test/menu';
import {GroupTest as Component21} from '../test/menu';
import {FMenuIconTest as Component22} from '../test/menu';
import {CollapseTest as Component23} from '../test/menu';
import {Test as Component24} from '../test/pagination';
import {FProgressTest as Component25} from '../test/progress';
import {ThemeTest as Component26} from '../test/progress';
import {Test2 as Component27} from '../test/progress';
import {Test3 as Component28} from '../test/progress';
import {BaseTest as Component29} from '../test/radio';
import {ConfigTest as Component30} from '../test/radio';
import {BaseTest as Component31} from '../test/siwtch';
import {ColorTest as Component32} from '../test/siwtch';
import {WidthTest as Component33} from '../test/siwtch';
import {TextTest as Component34} from '../test/siwtch';
import {ValueTest as Component35} from '../test/siwtch';
import {DisabledTest as Component36} from '../test/siwtch';
import {BeforeChangeTest as Component37} from '../test/siwtch';
import {LoadingTest as Component38} from '../test/siwtch';
import {FTabTest1 as Component39} from '../test/tab';
import {FTabTest2 as Component40} from '../test/tab';
import {FTableTest as Component41} from '../test/table';
import {FTagTest as Component42} from '../test/tag';
import {FToastTest as Component43} from '../test/toast';
import {ClostTest as Component44} from '../test/toast';
import {ApiTest as Component45} from '../test/toast';
import {QuickTest as Component46} from '../test/toast'
export const routes = [{label: '按钮（FButton）', path: '/button', element: <><h1>按钮（FButton）</h1><div><><h2>不同形状</h2><Component1/></><br/><><h2>不同尺寸</h2><Component2/></><br/><><h2>不同类型</h2><Component3/></><br/><><h2>不同形态</h2><Component4/></><br/><><h2>加载中</h2><Component5/></><br/><><h2>防抖节流</h2><Component6/></></div></>},{label: '对话框（FDialog）', path: '/dialog', element: <><h1>对话框（FDialog）</h1><div><><h2>基础使用</h2><Component7/></><br/><><h2>自定义头部</h2><Component8/></><br/><><h2>自定义底部</h2><Component9/></></div></>},{label: '图标（Icon）', path: '/icon', element: <><h1>图标（Icon）</h1><div><><h2>图标</h2><Component10/></></div></>},{label: '布局组件（FLayout）', path: '/layout', element: <><h1>布局组件（FLayout）</h1><div><><h2>默认</h2><Component11/></><br/><><h2>侧边栏在右侧</h2><Component12/></><br/><><h2>显示边界</h2><Component13/></><br/><><h2>只显示顶部和内容区</h2><Component14/></><br/><><h2>只显示侧边栏和内容区</h2><Component15/></><br/><><h2>只显示底部和内容区</h2><Component16/></></div></>},{label: '加载（FLoading）', path: '/loading', element: <><h1>加载（FLoading）</h1><div><><h2>不同速度</h2><Component17/></><br/><><h2>自定义速度</h2><Component18/></><br/><><h2>自定义颜色</h2><Component19/></></div></>},{label: '菜单（FMenu）', path: '/menu', element: <><h1>菜单（FMenu）</h1><div><><h2>基础使用</h2><Component20/></><br/><><h2>带分组</h2><Component21/></><br/><><h2>带图标</h2><Component22/></><br/><><h2>可折叠</h2><Component23/></></div></>},{label: '分页器（FPagination）', path: '/pagination', element: <><h1>分页器（FPagination）</h1><div><Component24/></div></>},{label: '进度条（FProgress）', path: '/progress', element: <><h1>进度条（FProgress）</h1><div><><h2>默认使用</h2><Component25/></><br/><><h2>不同主题</h2><Component26/></><br/><><h2>自定义精度</h2><Component27/></><br/><><h2>文字显示在内部</h2><Component28/></></div></>},{label: '单选框（FRadio）', path: '/radio', element: <><h1>单选框（FRadio）</h1><div><><h2>基础单选框</h2><Component29/></><br/><><h2>基础配置</h2><Component30/></></div></>},{label: '开关（FSwitch）', path: '/siwtch', element: <><h1>开关（FSwitch）</h1><div><><h2>尺寸</h2><Component31/></><br/><><h2>自定义颜色</h2><Component32/></><br/><><h2>自定义宽高</h2><Component33/></><br/><><h2>文本描述</h2><Component34/></><br/><><h2>扩展的value类型</h2><Component35/></><br/><><h2>禁用</h2><Component36/></><br/><><h2>阻止切换-待完善</h2><Component37/></><br/><><h2>加载状态</h2><Component38/></></div></>},{label: '选项卡（FTab）', path: '/tab', element: <><h1>选项卡（FTab）</h1><div><><h2>基础使用</h2><Component39/></><br/><><h2>过长时滚动</h2><Component40/></></div></>},{label: '表格（FTable）', path: '/table', element: <><h1>表格（FTable）</h1><div><Component41/></div></>},{label: '标签（FTag）', path: '/tag', element: <><h1>标签（FTag）</h1><div><Component42/></div></>},{label: '提示信息（FToast）', path: '/toast', element: <><h1>提示信息（FToast）</h1><div><><h2>组件使用</h2><Component43/></><br/><><h2>关闭和显示</h2><Component44/></><br/><><h2>Api调用</h2><Component45/></><br/><><h2>Api快捷调用</h2><Component46/></></div></>}]