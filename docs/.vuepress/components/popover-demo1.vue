<template>
  <div class="all-wrapper">
    <div class="input-wrapper">
      <div class="input">
        <div class="wrapper">
          <bl-popover position="left">
            <template slot="content">
              这是内容，这是内容，这是内容。
              这是内容，这是内容，这是内容。
            </template>
            <bl-button>点击，左方显示内容</bl-button>
          </bl-popover>
          <bl-popover position="top">
            <template slot="content">
              这是内容，这是内容，这是内容。
              这是内容，这是内容，这是内容。
            </template>
            <bl-button>点击，上方显示内容</bl-button>
          </bl-popover>
          <bl-popover position="bottom">
            <template slot="content">
              这是内容，这是内容，这是内容。
              这是内容，这是内容，这是内容。
            </template>
            <bl-button>点击，下方显示内容</bl-button>
          </bl-popover>
          <bl-popover position="right">
            <template slot="content">
              这是内容，这是内容，这是内容。
              这是内容，这是内容，这是内容。
            </template>
            <bl-button>点击，右方显示内容</bl-button>
          </bl-popover>
        </div>
      </div>
      <div class="info">
        <span>最基础的点击显示弹出框,使用<code>position</code>属性控制弹出框位置，点击触发组件本身或是点击外部即可关闭。</span>
      </div>
    </div>
    <div class="code">
      <vue-code-highlight>
        <pre><code>{{ code }}</code></pre>
      </vue-code-highlight>
    </div>
  </div>
</template>

<script>
import {component as VueCodeHighlight} from 'vue-code-highlight';
import "vue-code-highlight/themes/prism-okaidia.css";
import Popover from "../../../src/Popover";
import Button from "../../../src/Button";

export default {
  components: {
    'bl-popover': Popover,
    'bl-button': Button,
    VueCodeHighlight,
  },
  data() {
    return {
      code: `
<div class="wrapper">
  <bl-popover position="left">
    <template slot="content">
              这是内容，这是内容，这是内容。
              这是内容，这是内容，这是内容。
    </template>
    <bl-button>点击，左方显示内容</bl-button>
  </bl-popover>
  <bl-popover position="top">
    <template slot="content">
              这是内容，这是内容，这是内容。
              这是内容，这是内容，这是内容。
    </template>
    <bl-button>点击，上方显示内容</bl-button>
  </bl-popover>
  <bl-popover position="bottom">
    <template slot="content">
              这是内容，这是内容，这是内容。
              这是内容，这是内容，这是内容。
    </template>
    <bl-button>点击，下方显示内容</bl-button>
  </bl-popover>
  <bl-popover position="right">
    <template slot="content">
              这是内容，这是内容，这是内容。
              这是内容，这是内容，这是内容。
    </template>
    <bl-button>点击，右方显示内容</bl-button>
  </bl-popover>
</div>
      `
    }
  },

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