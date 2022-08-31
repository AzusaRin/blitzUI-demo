<template>
  <div class="wrapper">
    <div class="button-wrapper">
      <div class="button">
        <bl-button :loading="true">加载中</bl-button>
        <bl-button @click="loading1=!loading1" :loading="loading1" icon-name="download">点击切换</bl-button>
      </div>
      <div class="info">
        <span>使用 <code>:loading="true"</code>、<code>:loading="false"</code>来定义是否为加载中，可绑定鼠标事件切换。</span>
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
      code: `  <div>
    <bl-button :loading="true">加载中</bl-button>
    <bl-button @click="loading1=!loading1" :loading="loading1" icon-name="download">
    默认按钮
    </bl-button>
  </div>

export default {
  data() {
    return {
      loading1: true
    }
  }
}`,
    loading1:true
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