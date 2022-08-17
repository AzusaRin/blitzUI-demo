<template>
<div class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
  <slot></slot>
</div>
</template>
<script>
export default {
  name:'BlitzRow',
  props:{
    gutter:{
      type:[String,Number]
    }
  },
  mounted() {
    this.$children.forEach(vm=>{
      vm.gutter = this.gutter
    })
  }
}
</script>
<style lang="scss" scoped>
.row{
  display: flex;
  //background: #d2d1d1;
}
</style>