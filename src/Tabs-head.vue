<template>
  <div class="tabs-head" >
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="action-wrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlitzTabsHead',
  inject: ['eventHub'],
  mounted() {
    this.eventHub && this.eventHub.$on('update:selected', (item, child) => {
      const {width,left} = child.$el.getBoundingClientRect()
      const {left:headLeft} = this.$el.getBoundingClientRect()
      this.$refs.line.style.left= `${left - headLeft}px`
        this.$refs.line.style.width = `${width}px`
    })
  },
}
</script>

<style lang="scss" scoped>
.tabs-head {
  display: flex;
  height: 40px;
  justify-content: flex-start;
  border-bottom: 1px solid #ddd;
  position: relative;



  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1.5px solid #409eff;
    transition: all .3s;
  }

  > .action-wrapper {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
  }

}
</style>