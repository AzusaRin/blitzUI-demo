---
title:getStart
---

# 快速上手

本文将介绍如何在项目中使用 BlitzUI。

## 按需引入

例如需要使用Button组件。

```js
import { Button } from "blitz-ui-demo";
import 'blitz-ui-demo/dist/index.css'
```

## 注册组件

```js
export default {
  components: {
    "bl-button": Button,
  },
}
```

## 使用

```html
<template>
  <div>
    <bl-button>常规按钮</bl-button>
  </div>
</template>

```

---

至此，即可使用BlitzUI提供的组件。