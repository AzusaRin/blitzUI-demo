<template>
  <div class="all-wrapper">
    <div class="input-wrapper">
      <div class="input">
        <div class="wrapper">
          <bl-layout>
            <bl-header>header</bl-header>
          </bl-layout>
          <bl-layout>
            <bl-content>content</bl-content>
          </bl-layout>
          <bl-layout>
            <bl-footer>footer</bl-footer>
          </bl-layout>
        </div>
      </div>
      <div class="info">
        <span>没有sider的上中下布局</span>
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
import Layout from "../../../src/Layout";
import Header from "../../../src/Header";
import Content from "../../../src/Content";
import Sider from "../../../src/Sider";
import Footer from "../../../src/Footer";

export default {
  components: {
    'bl-layout': Layout,
    'bl-header': Header,
    'bl-content': Content,
    'bl-sider': Sider,
    'bl-footer': Footer,
    VueCodeHighlight,
  },
  data() {
    return {
      code: `
<style lang="scss" scoped>
  .wrapper {
  > .layout {
    > .header { height: 60px;background: #409eff;}
  }
  > .layout {
    > .content {height: 200px;background: #c0c4cc}
  }
  > .layout {
    > .footer {height: 60px;background: #c6e2ff}
  }
}
</style>
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

    > .content {height: 200px;background: #c0c4cc}
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