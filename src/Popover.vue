<template>
<div class="popover" @click="onClick">
  <div class="content-wrapper" v-if="visible">
  <slot name="content" ></slot>
  </div>
  <slot></slot>
</div>
</template>

<script>
export default {
  name:'BlitzPopover',
  data(){
    return{
      visible:false
    }
  },
  methods:{
    onClick(){
     this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss" scoped>
.popover{
  display: inline-block;
  position: relative;
  .content-wrapper{
    position: absolute;
    bottom: 100%;
    left: 0;
  }
}
</style>