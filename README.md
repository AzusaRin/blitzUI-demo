![GitHub](https://img.shields.io/github/license/AzusaRin/blitzUI-demo)
![npm](https://img.shields.io/npm/v/blitz-ui-demo)

# BlitzUI      一款简洁好用的Vue UI组件

作者：AzusaRin

## 介绍

这是我在学习使用Vue时个人制作的一系列UI组件框架。

## 开始使用

1. 使用本框架前请在CSS中开启border-box

```
*,*::before,*::after{box-sizing:border-box}

```

2. 安装blitzUI

```
npm install --save blitz-ui-demo
```

3. 引入blitzUI全部组件

```js
import {
    Button,
    ButtonGroup,
    Icon,
    Col,
    Content,
    Collapse,
    CollapseItem,
    Footer,
    Header,
    Input,
    TabsItem,
    Layout,
    Popover,
    Row,
    Sider,
    Tabs,
    TabsBody,
    TabsHead,
    TabsPanel,
    Toast,
    toastPlugin
} from "blitz-ui-demo"

import Vue from "vue"

Vue.use(toastPlugin)

export default {
    name: 'app',
    components: {
        'bl-button': Button,
        'bl-icon': Icon,
        'bl-button-group': ButtonGroup,
        'bl-input': Input,
        'bl-row': Row,
        'bl-col': Col,
        'bl-layout': Layout,
        'bl-header': Header,
        'bl-sider': Sider,
        'bl-content': Content,
        'bl-footer': Footer,
        'bl-toast': Toast,
        'bl-tabs': Tabs,
        'bl-tabs-body': TabsBody,
        'bl-tabs-head': TabsHead,
        'bl-tabs-panel': TabsPanel,
        'bl-tabs-item': TabsItem,
        'bl-popover': Popover,
        'bl-collapse': Collapse,
        'bl-collapse-item': CollapseItem,

    }
}
```

## 文档

## 提问

https://github.com/AzusaRin/blitzUI-demo/issues

## 变更记录

## 联系方式

## 贡献代码





