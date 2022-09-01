---
title: Toast-轻提示
---

# 轻提示
在页面上中下弹出蓝色提示，用于消息通知、加载提示、操作结果提示等场景。



### 如何使用

::: tip 引入
本组件引入和其他组件稍有不同，请参考以下代码。
```
import Vue from "vue";
import { toastPlugin } from "blitz-ui";
import { Toast } from "blitz-ui";

Vue.use(toastPlugin);
```
:::

---

## 基础提示
<toast-demo1></toast-demo1>

---


## 有关闭按钮的提示

<toast-demo2></toast-demo2>

---

## 可设置自动关闭的时间

<toast-demo3></toast-demo3>



::: warning
```autoClose```只可设置为数字或false，不可设置为true。
:::

---

## 可设置提示内容为HTML内容

<toast-demo4></toast-demo4>

---

## Toast Attributes


| 参数          | 说明                 | 类型              | 可选值                       |  默认值  |
|-------------|--------------------|-----------------|---------------------------|:-----:|
| position    | 确定Toast的位置         | String          | 'top', 'middle', 'bottom' | 'top' |
| closeButton | Toast带有关闭按钮，需回调函数  | Object          | —                         |   —   |
| autoClose   | Toast自动关闭的开关，或者时间  | Boolean, Number | number/false              |   5   |
| enableHtml  | 决定Toast是否能表示HTML内容 | Boolean         | —                         | false |





