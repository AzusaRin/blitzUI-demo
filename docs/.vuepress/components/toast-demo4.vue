<template>
  <div class="all-wrapper">
    <div class="input-wrapper">
      <div class="input">
        <div class="wrapper">
          <bl-button @click="showToast">博客主页</bl-button>
        </div>
        <div class="info">
          <span>可让Toast显示HTML内容,可在方法里传入<code>enableHtml:true</code>属性来调用。默认五秒之后自动关闭。</span>
        </div>
      </div>
      <div class="code">
        <vue-code-highlight>
          <pre><code>{{ code }}</code></pre>
        </vue-code-highlight>
      </div>
    </div>
  </div>
</template>

<script>
import {component as VueCodeHighlight} from 'vue-code-highlight';
import "vue-code-highlight/themes/prism-okaidia.css";
import Vue from "vue";
import toastPlugin from "../../../src/toastPlugin";
import Toast from "../../../src/Toast";
import Button from "../../../src/Button";


Vue.use(toastPlugin)

export default {
  components: {
    VueCodeHighlight,
    'bl-toast': Toast,
    'bl-button': Button,

  },
  data() {
    return {
      code: `
<div class="wrapper">
  <bl-button @click="showToast">博客主页</bl-button>
</div>


import Vue from "vue";
import {  toastPlugin  } from "blitz-ui";
import {  Toast  } from "blitz-ui";
import {  Button  } from "blitz-ui";



export default {
  methods: {
    showToast() {
      this.$toast(
      '<a href="https://juejin.cn/user/163177786258141">点击打开AzusaRin的博客主页</a>',
      {enableHtml:true}
      )
    }
  }
}

`
    }
  },
  methods: {
    showToast() {
      this.$toast('<a href="https://juejin.cn/user/163177786258141">点击打开AzusaRin的博客主页</a>', {enableHtml:true})
    }
  }

}
</script>

<style lang="scss" scoped>
.wrapper {
  > .layout {
    > .header {
      height: 60px;
      background: #409eff;
    }
  }

  > .layout {
    > .sider {
      height: 200px;
      width: 200px;
      background: #91d5ff
    }

    > .content {
      background: #c0c4cc
    }
  }

  > .layout {
    > .footer {
      height: 60px;
      background: #c6e2ff
    }
  }
}

.all-wrapper {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 1px solid #ebeef5;

  > .input-wrapper {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    > .input {
      margin: 10px;
      border: none;
    }
  }

  .info {
    padding: 20px;
    margin: 10px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
  }

  .code {
    margin: 0 10px 0 10px;

    code {
      color: #303133;
    }

  }
}
</style>