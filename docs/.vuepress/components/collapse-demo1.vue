<template>
  <div class="all-wrapper">
    <div class="input-wrapper">
      <div class="input">
        <div class="wrapper">
<bl-collapse :selected.sync="selected">
  <bl-collapse-item title="标题1" name="1">谢谢您使用BlitzUI</bl-collapse-item>
  <bl-collapse-item title="标题2" name="2">谢谢您使用BlitzUI</bl-collapse-item>
  <bl-collapse-item title="标题3" name="3">谢谢您使用BlitzUI</bl-collapse-item>
</bl-collapse>
        </div>
        <div class="info">
          <span>通过 <code>:selected.sync</code> 控制展开的面板列表，<code>selected</code>为数组格式。</span>
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
import Collapse from "../../../src/Collapse";
import CollapseItem from "../../../src/Collapse-item";


export default {
  components: {
    VueCodeHighlight,
    'bl-collapse': Collapse,
    'bl-collapse-item': CollapseItem

  },
  data() {
    return {
      code: `
<div class="wrapper">
  <bl-collapse :selected.sync="selected">
    <bl-collapse-item title="标题1" name="1">谢谢您使用BlitzUI</bl-collapse-item>
    <bl-collapse-item title="标题2" name="2">谢谢您使用BlitzUI</bl-collapse-item>
    <bl-collapse-item title="标题3" name="3">谢谢您使用BlitzUI</bl-collapse-item>
  </bl-collapse>
</div>


export default {
  data(){
  return{
    selected:['1']
    }
  }
}

`,
      selected:['1']
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