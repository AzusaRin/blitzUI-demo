<template>
  <div class="collapse-item">
    <div class="title" @click="open=!open">
      {{ title }}
    </div>
    <div class="content"  v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlitzCollapseItem',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data(){
    return{
      open:false
    }
  }
}
</script>

<style lang="scss" scoped>
.collapse-item {

  .title {
    height: 48px;
    line-height: 48px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 13px;
    cursor: pointer;
    padding: 24px ;
    outline: none;
    font-weight: 500;


    &::after {
      align-self: center;
      content: '';
      display: block;
      border-bottom: 1px solid #d9d9d9;
      width: 100%;

    }

  }

  .content{

    font-size: 13px;
    color: #303133;
    line-height: 1.7692307692;
    padding: 0 24px 24px 24px;
  }
}
</style>