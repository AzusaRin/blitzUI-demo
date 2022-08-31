---
title: Tabs-标签页
---

# 标签页
对内容进行分页，选择。


### 如何使用

---

## 样式
<tabs-demo></tabs-demo>

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



