<template>
  <div class="all-wrapper">
    <div class="input-wrapper">
      <div class="input">
        <div class="grid-wrapper">
          <bl-row class="row" align="left">
            <bl-col class="item" span="8">align="left"</bl-col>
            <bl-col class="item" span="8">align="left"</bl-col>
          </bl-row>
          <bl-row class="row" align="center">
            <bl-col class="item" span="8">align="center"</bl-col>
            <bl-col class="item" span="8">align="center"</bl-col>
          </bl-row>
          <bl-row class="row" align="right">
            <bl-col class="item" span="8">align="right"</bl-col>
            <bl-col class="item" span="8">align="right"</bl-col>
          </bl-row>
        </div>
      </div>
      <div class="info">
        <span>根据<code>align</code>来决定栅格聚集位置的布局形式</span>
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
import Row from "../../../src/Row";
import Col from "../../../src/Col";


export default {
  components: {
    'bl-row': Row,
    'bl-col': Col,
    VueCodeHighlight,
  },
  data() {
    return {
      code: `
<div class="grid-wrapper">
  <bl-row class="row" align="left">
    <bl-col class="item" span="8">align="left"</bl-col>
    <bl-col class="item" span="8">align="left"</bl-col>
  </bl-row>
  <bl-row class="row" align="center">
    <bl-col class="item" span="8">align="center"</bl-col>
    <bl-col class="item" span="8">align="center"</bl-col>
  </bl-row>
  <bl-row class="row" align="right">
    <bl-col class="item" span="8">align="right"</bl-col>
    <bl-col class="item" span="8">align="right"</bl-col>
  </bl-row>
</div>
<style lang="scss" scoped>
* {box-sizing: border-box;}
.grid-wrapper {
  > .row {margin-bottom: 20px;padding: 5px 0;
    > .item {line-height: 3;text-align: center;
       &:nth-child(odd) {background: #409eff;color: white;}
      &:nth-child(even) {background: #c6e2ff;color: #303133;}
    }
  }
}
</style>
      `
    }
  },

}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.grid-wrapper {

  > .row {
    margin-bottom: 20px;
    padding: 5px 0;

    > .item {
      line-height: 3;
      text-align: center;

      &:nth-child(odd) {
        background: #409eff;
        color: white;
      }

      &:nth-child(even) {
        background: #c6e2ff;
        color: #303133;
      }

      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
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