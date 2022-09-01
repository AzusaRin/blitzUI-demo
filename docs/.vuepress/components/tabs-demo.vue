<template>
  <div class="wrapper">
    <div class="button-wrapper">
      <div class="tabs-wrapper">
<bl-tabs :selected.sync="selected">
    <bl-tabs-head>
      <bl-tabs-item name='tab1'>手机</bl-tabs-item>
      <bl-tabs-item name='tab2'>数码</bl-tabs-item>
      <bl-tabs-item name='tab3'>企业礼品</bl-tabs-item>
      <bl-tabs-item name='tab4' :disabled="true">生鲜(被禁用)</bl-tabs-item>
    </bl-tabs-head>
    <bl-tabs-body>
      <bl-tabs-panel name='tab1'>手机</bl-tabs-panel>
      <bl-tabs-panel name='tab2'>数码</bl-tabs-panel>
      <bl-tabs-panel name='tab3'>企业礼品</bl-tabs-panel>
      <bl-tabs-panel name='tab4'>生鲜(被禁用)</bl-tabs-panel>
    </bl-tabs-body>
</bl-tabs>
      </div>
      <div class="info">
        <span>使用<code>name</code>进行内容与选项卡的绑定，使用<code>disabled</code>确认是否禁用,使用<code>selected</code>确定默认选项卡。</span>
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
      code:`
<div class="tabs-wrapper">
  <bl-tabs :selected.sync="selected">
    <bl-tabs-head>
      <bl-tabs-item name='tab1'>手机</bl-tabs-item>
      <bl-tabs-item name='tab2'>数码</bl-tabs-item>
      <bl-tabs-item name='tab3'>企业礼品</bl-tabs-item>
      <bl-tabs-item name='tab4' :disabled="true">生鲜(被禁用)</bl-tabs-item>
  </bl-tabs-head>
    <bl-tabs-body>
      <bl-tabs-panel name='tab1'>手机</bl-tabs-panel>
      <bl-tabs-panel name='tab2'>数码</bl-tabs-panel>
      <bl-tabs-panel name='tab3'>企业礼品</bl-tabs-panel>
      <bl-tabs-panel name='tab4'>生鲜(被禁用)</bl-tabs-panel>
    </bl-tabs-body>
</bl-tabs>
      </div>


  export default {
    data() { return { selected: 'tab1' } }
  }

      `
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