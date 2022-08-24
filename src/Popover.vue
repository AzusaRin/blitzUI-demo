<template>
  <div class="popover" @click.stop="onClick">
    <div class="content-wrapper"   ref="contentWrapper"  v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="switchWrapper">
    <slot></slot>
      </span>
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
          document.body.appendChild(this.$refs.contentWrapper)
        let {top,left}  =  this.$refs.switchWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
          let outerClick = () => {
            this.visible = false
            document.removeEventListener('click', outerClick)

          }
          document.addEventListener('click', outerClick)
        })

      }
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  position: relative;
}
.content-wrapper {
  position: absolute;
  transform: translateY(-100%);
}
</style>