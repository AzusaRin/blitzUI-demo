<template>
  <div class="popover" @click.stop="onClick">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BlitzPopover',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    onClick() {
      this.visible = !this.visible
      if (this.visible === true) {
        this.$nextTick(() => {
          let outerClick = () => {
            this.visible = false
            document.removeEventListener('click', outerClick)

          }
          document.addEventListener('click', outerClick)
        })

      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  position: relative;

  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
  }
}
</style>