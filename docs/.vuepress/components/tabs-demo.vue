<template>
  <div class="wrapper">
    <div class="button-wrapper">
      <div class="tabs-wrapper">
<bl-tabs :selected.sync="selected">
    <bl-tabs-head>
      <bl-tabs-item name='tab1'>Tab1</bl-tabs-item>
      <bl-tabs-item name='tab2'>比较长名字的Tab2</bl-tabs-item>
      <bl-tabs-item name='tab3'>更将长的名字长度的Tab3</bl-tabs-item>
      <bl-tabs-item name='tab4'>被禁用的Tab4</bl-tabs-item>
    </bl-tabs-head>
    <bl-tabs-body>
      <bl-tabs-panel name='tab1'>内容1</bl-tabs-panel>
      <bl-tabs-panel name='tab2'>内容2</bl-tabs-panel>
      <bl-tabs-panel name='tab3'>内容3</bl-tabs-panel>
      <bl-tabs-panel name='tab4'>内容4</bl-tabs-panel>
    </bl-tabs-body>
</bl-tabs>
      </div>
      <div class="info">
        <span>多个按钮组队出现，用于成组功能的按钮。</span>
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
import Tabs from "../../../src/Tabs";
import TabsHead from "../../../src/Tabs-head";
import TabsBody from "../../../src/Tabs-body";
import TabsItem from "../../../src/Tabs-item";
import TabsPanel from "../../../src/Tabs-panel";
import BlitzButton from "../../../src/Button";

export default {
  components: {
    BlitzButton,
    VueCodeHighlight,
    'bl-tabs':Tabs,
    'bl-tabs-head':TabsHead,
    'bl-tabs-body':TabsBody,
    'bl-tabs-item':TabsItem,
    'bl-tabs-panel':TabsPanel
  },
  data() {
    return {
      code:`  <bl-button-group>
    <bl-button icon-name="left">上一页</bl-button>
    <bl-button>详情页</bl-button>
    <bl-button icon-name="right" icon-position="right">下一页</bl-button>
  </bl-button-group>`
      ,
      selected:'tab1'
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 1200px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 1px solid #ebeef5;

  > .button-wrapper {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    > .tabs-wrapper {
      margin: 10px;

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