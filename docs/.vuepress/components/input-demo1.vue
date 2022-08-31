<template>

  <div class="all-wrapper">
    <div class="input-wrapper">
      <div class="input">
     <bl-input v-model="value"></bl-input>
      </div>
      <div class="info">
        <span>最基础的输入框</span>
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
import Input from '../../../src/Input';
import {component as VueCodeHighlight} from 'vue-code-highlight';
import "vue-code-highlight/themes/prism-okaidia.css";
export default {

  components: {
    'bl-input': Input,
    VueCodeHighlight,
  },
  data(){
    return{
      code: `<bl-input v-model="value"></bl-input>

export default {
  data() {
    return {
      value: ''
    }
  }
}
`,
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