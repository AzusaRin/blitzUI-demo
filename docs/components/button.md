---
title: Button-按钮
---

# 按钮

常用的操作按钮。

### 如何使用

---

## 基础按钮

<ClientOnly>

<button-demo1></button-demo1>

</ClientOnly>

---

## 按钮组



<ClientOnly>
<button-demo2></button-demo2>
</ClientOnly>

::: warning
请注意```bl-button-group``` 的子元素只能是```bl-button```，否则可能会发生样式错误。
:::
---

## 加载按钮

<ClientOnly>
<button-demo3></button-demo3>
</ClientOnly>

---

## 禁用状态

<ClientOnly>
<button-demo4></button-demo4>
</ClientOnly>

---

## Button Attributes

| 参数            | 说明        | 类型      | 可选值                                                                          |  默认值   |
|---------------|-----------|---------|------------------------------------------------------------------------------|:------:|
| icon-name     | 按钮种类      | String  | 'info', 'setting', 'download','success', 'warning', 'error', 'left', 'right' |   —    |
| icon-position | 按钮图标的左右位置 | String  | 'left','right'                                                               | 'left' |
| loading       | 加载中       | Boolean | —                                                                            | false  |
| disabled      | 是否禁用      | Boolean | —                                                                            | false  |