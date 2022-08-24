<template>
  <div class="popover" ref="popover" @click="onClick">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
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
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.setPopover()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick(event) {
      if (this.$refs.switchWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    },
    onClickDocument(event) {
      if (this.$refs.popover &&
          this.$refs.popover.contains(event.target) || this.$refs.popover === event.target) {
        return;
      }
      if(this.$refs.contentWrapper&&
      this.$refs.contentWrapper.contains(event.target)||this.$refs.contentWrapper===event.target){
        return;
      }
      console.log( this.$refs.popover.contains(event.target));
      this.close()
    },
    setPopover() {
      document.body.appendChild(this.$refs.contentWrapper)
      let {top, left} = this.$refs.switchWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
    },
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
  font-size: 14px;
  text-align: justify;
  word-break: break-all;
  border-radius: 4px;
  position: absolute;
  transform: translateY(-100%);
  margin-top: -10px;
  padding: .5em 1em;
  max-width: 20em;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
  &::before,&::after {
    content: '';
    display: block;
    border: 5px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
    left: 10px;
  }
    &::before{
      border-top-color: #ebeef5;;
      top: 100%;
    }
    &::after{
      border-top-color: white;
      top:calc(100% - 0.5px);
    }
  }

</style>