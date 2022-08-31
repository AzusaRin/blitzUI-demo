<template>
  <div class="wrapper">
    <div class="button-wrapper">
      <div class="button">
        <bl-button :disabled="true">已禁用</bl-button>
      </div>
      <div class="info">
        <span>使用 <code>:disabled="true"</code>、<code>:disabled="false"</code>来定义是否为禁用状态。</span>
      </div>
    </div>
    <div class="code">
      <pre><code>{{ code }}</code></pre>
    </div>
  </div>

</template>

<script>
import Button from '../../../src/Button'


export default {
  components: {
    'bl-button': Button
  },
  data() {
    return {
      code: `<bl-button :disabled="true">已禁用</bl-button>`
    }
  },

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