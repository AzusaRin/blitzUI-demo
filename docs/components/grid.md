---
title: Grid-栅格布局容器
---

# 栅格布局容器
通过基础的 24 分栏，迅速简便地创建布局。


### 如何使用

---

## 基础布局
<grid-demo1></grid-demo1>

---

## 分栏间隔布局
<grid-demo2></grid-demo2>


---

## 对齐方式布局
<grid-demo3></grid-demo3>

---

## 分栏偏移布局
<grid-demo4></grid-demo4>

---

## 响应式布局
<grid-demo5></grid-demo5>

---


## Row Attributes


| 参数       | 说明      | 类型            | 可选值                     |  默认值   |
|-----------|----------|----------------|-------------------------|:------:|
| gutter   | 栅格间隔    | String/Number | 1-24之间的数字               |   0    |
| align    | 输入框占位文本 | String        | 'left'、'center'、'right' | 'left' |


---

## Col Attributes

| 参数           | 说明                           | 类型                                        |    可选值    | 默认值 |
|--------------|------------------------------|-------------------------------------------|:---------:|:---:|
| span         | 栅格占据的列数                      | String/Number                             | 1-24之间的数字 | 24  |
| offset       | 栅格左侧的间隔格数                    | String/Number                             |     1-24之间的数字     |  0  |
| pad          | ```≥577px``` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 18, offset: 4}) |     —     |  —  |
| smallDevice  | ```≥769px``` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 18, offset: 4}) |     —     |  —  |
| middleDevice | ```≥993px``` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 18, offset: 4}) |     —     |  —  |
| bigDevice    | ```≥1201px``` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 18, offset: 4}) |     —     |  —  |



