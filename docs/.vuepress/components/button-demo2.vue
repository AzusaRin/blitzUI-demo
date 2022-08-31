<template>
  <div class="wrapper">
    <div class="button-wrapper">
      <div class="button">
        <bl-button-group>
          <bl-button icon-name="left">上一页</bl-button>
          <bl-button>详情页</bl-button>
          <bl-button icon-name="right" icon-position="right">下一页</bl-button>
        </bl-button-group>
      </div>
      <div class="info">
        <span>多个按钮组队出现，用于成组功能的按钮。</span>
      </div>
    </div>
    <div class="code">
      <pre><code>{{ code }}</code></pre>
    </div>
  </div>

</template>

<script>
import Button from '../../../src/Button'
import ButtonGroup from "../../../src/Button-group";


export default {
  components: {
    'bl-button': Button,
    'bl-button-group': ButtonGroup
  },
  data() {
    return {
      code:`  <bl-button-group>
    <bl-button icon-name="left">上一页</bl-button>
    <bl-button>详情页</bl-button>
    <bl-button icon-name="right" icon-position="right">下一页</bl-button>
  </bl-button-group>`
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 1px solid #ebeef5;

  > .button-wrapper {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    > .button {
      margin: 10px;
      flex: 1;
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