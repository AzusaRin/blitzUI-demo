<template>
  <div class="layout" :class="layOutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BlitzLayout',
  data() {
    return {
      layOutClass: {
        hasSider: false
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === 'BlitzSider') {
        this.layOutClass.hasSider = true
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;


  &.hasSider{
    flex-direction: row;
  }
}
</style>