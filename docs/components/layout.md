---
title: Layout-默认布局容器
---

# 默认布局容器
方便搭建页面的基本结构。

::: warning
本容器使用flex布局，请保证```bl-layout```是```bl-header```、```bl-sider``` 、```bl-content``` 、
```bl-footer```的父元素，并且他们的父元素也是```bl-layout```，否则可能会发生样式错误。
:::

::: tip
以下是本组件的使用例，使用方法并不局限于此。
:::

### 如何使用

---

## 基础布局
<layout-demo1></layout-demo1>

---

## 没有侧边栏的布局
<layout-demo2></layout-demo2>


---

## 嵌套布局
<layout-demo3></layout-demo3>

---


## Layout Explanation

|            容器名             | 说明                                                                                                |
|:--------------------------:|---------------------------------------------------------------------------------------------------|
|      ```bl-layout```       | 最外层容器，内部可嵌套```bl-header```、```bl-sider``` 、```bl-content``` 、```bl-footer``` 或是```bl-layout```本身。 | 
|      ```bl-header```       | 顶栏容器，内部可嵌套任何元素。                                                                                   |
|       ```bl-sider```       | 侧边栏容器，内部可嵌套任何元素,当 ```bl-sider```存在时，```bl-layout```内部将会横向排列。                                      |
|      ```bl-content```      | 主内容栏容器，内部可嵌任何以元素。                                                                                 |
|      ```bl-footer```       | 底栏容器，内部可嵌套任何元素。                                                                                   | 



