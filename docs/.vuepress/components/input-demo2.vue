<template>
  <div class="all-wrapper">
    <div class="input-wrapper">
      <div class="input">
        <bl-input v-model="value" :placeholder="placeholder"></bl-input>
      </div>
      <div class="info">
        <span>可在data自行设置placeholder</span>
      </div>
    </div>
    <div class="code">
      <pre><code>{{ code }}</code></pre>
    </div>
  </div>

</template>

<script>
import Input from '../../../src/Input'


export default {
  components: {
    'bl-input': Input
  },
  data(){
    return{
      code: `<bl-input v-model="value"></bl-input>

export default {
  data() {
    return {
      placeholder:'可以自行设置placeholder',
      value:''
    }
  }
}
`,
      placeholder:'可以自行设置placeholder',
      value:''
    }
  }
}
</script>

<style lang="scss" scoped>
.all-wrapper {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 1px solid #ebeef5;

  >.input-wrapper{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    > .input {
      margin: 10px;
      border: none;
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