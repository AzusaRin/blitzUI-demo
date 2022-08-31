<template>
  <div class="wrapper">
    <div class="button-wrapper">
    <div class="button">
      <bl-button>默认按钮</bl-button>
      <bl-button icon-name="setting">设置按钮</bl-button>
      <bl-button icon-name="download" icon-position="right">下载按钮</bl-button>
    </div>
    <div class="button">
      <bl-button icon-name="info">信息按钮</bl-button>
      <bl-button icon-name="success">成功按钮</bl-button>
      <bl-button icon-name="warning">警告按钮</bl-button>
      <bl-button icon-name="error">危险按钮</bl-button>
    </div>
    <div class="button">
      <bl-button icon-name="left"></bl-button>
      <bl-button icon-name="right"></bl-button>
    </div>
    <div class="info">
      <span>使用 <code>icon-name</code>、<code>icon-position</code>来定义Button的样式</span>
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
  data(){
    return{
      code: `    <div>
      <bl-button>默认按钮</bl-button>
      <bl-button icon-name="setting">设置按钮</bl-button>
      <bl-button icon-name="download" icon-position="right">下载按钮</bl-button>
    </div>
    <div>
      <bl-button icon-name="info">信息按钮</bl-button>
      <bl-button icon-name="success">成功按钮</bl-button>
      <bl-button icon-name="warning">警告按钮</bl-button>
      <bl-button icon-name="error">危险按钮</bl-button>
    </div>
    <div>
      <bl-button icon-name="left"></bl-button>
      <bl-button icon-name="right"></bl-button>
    </div>`
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

>.button-wrapper{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  > .button {
    margin: 10px;
    flex: 1;
  }
}

  .info{
    padding: 20px;
    margin: 10px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
  }
  .code{
    margin: 0 10px 0 10px;
    code{
      color: #303133;
    }

  }
}

</style>