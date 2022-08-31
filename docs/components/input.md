---
title: Input 输入框
---

# 输入框
可以输入字符。

### 如何使用

---

## 基础用法
<input-demo1></input-demo1>

---

## 设置placeholder
<input-demo2></input-demo2>


---

## 只读状态
<input-demo3></input-demo3>

---


## 禁用状态
<input-demo4></input-demo4>

---


## 错误提示
<input-demo5></input-demo5>

---

## Input Attributes

| 参数          | 说明      | 类型      | 可选值 |   默认值   |
|-------------|---------|---------|-----|:-------:|
| value       | 绑定值     | String  | —   |    —    |
| placeholder | 输入框占位文本 | String  | —   | '请键入内容' |
| disabled    | 是否禁用    | Boolean | —   |  false  |
| readonly    | 是否只读    | Boolean | —   |  false  |
| error       | 错误提示    | String  | —   |  —  |


---

## Input Events

| 事件名称   | 说明                  |             回调参数              | 
|--------|---------------------|:-----------------------------:|
| change | 仅在输入框失去焦点或用户按下回车时触发 | (value: string &#124; number) |
| input  | 在 Input 值改变时触发      | (value: string &#124; number) | 
| focus  | 在 Input 获得焦点时触发     |        (event: Event)         |
| blur   | 在 Input 失去焦点时触发     |        (event: Event)         |
