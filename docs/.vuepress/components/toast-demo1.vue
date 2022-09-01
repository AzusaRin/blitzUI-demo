<template>
  <div class="all-wrapper">
    <div class="input-wrapper">
      <div class="input">
        <div class="wrapper">
          <bl-button @click="showToastTop">上方Toast</bl-button>
          <bl-button @click="showToastMiddle">中间Toast</bl-button>
          <bl-button @click="showToastBottom">下方Toast</bl-button>
        </div>
        <div class="info">
          <span>最基础的点击组件显示Toast,可在方法里传入<code>position</code>属性修改Toast位置，默认为视窗上端。默认五秒之后自动关闭。</span>
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
  <bl-button @click="showToastTop">上方Toast</bl-button>
  <bl-button @click="showToastMiddle">中间Toast</bl-button>
  <bl-button @click="showToastBottom">下方Toast</bl-button>
</div>


import Vue from "vue";
import {  toastPlugin  } from "blitz-ui";
import {  Toast  } from "blitz-ui";
import {  Button  } from "blitz-ui";



export default {
  methods: {
    showToastTop() {
      this.$toast('提示内容')
    },
    showToastMiddle() {
      this.$toast('提示内容',{position:'middle'})
    },
    showToastBottom() {
      this.$toast('提示内容',{position:'bottom'})
    },
  }
}

`
    }
  },
  methods: {
    showToastTop() {
      this.$toast('提示内容')
    },
    showToastMiddle() {
      this.$toast('提示内容',{position:'middle'})
    },
    showToastBottom() {
      this.$toast('提示内容',{position:'bottom'})
    },
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