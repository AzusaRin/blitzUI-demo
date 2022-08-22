<template>
  <div class="toast" ref="toast" :class="toastClass">
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="$slots.default[0]"></div>
    <div class="line" ref="line"></div>
    <span v-if="closeButton" class="close" @click="onClickClose">
      <bl-icon name="close" class="closeIcon"></bl-icon>
    </span>
  </div>
</template>

<script>
export default {
  name: 'BlitzToast',
  props: {
    type: {},
    autoClose: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 5
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: '关闭', callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'middle', 'bottom'].includes(value)
      }
    }
  },
  mounted() {
    this.execAutoClose()
    this.lineStyle()
  },
  computed: {
    toastClass() {
      return {
        [`position-${this.position}`]: true
      }
    }
  },
  methods: {
    execAutoClose() {
      if (this.autoClose === true) {

        setTimeout(() => {
          this.close()
        }, this.duration * 1000)
      }
    },
    lineStyle() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
      })
    },
    close() {
      this.$el.remove()
      this.$emit('beforeClose')
      this.$destroy()
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  border-radius: 4px;
  border: 1px solid #91d5ff;
  padding: 0 16px;
  font-size: 14px;
  color: #000000d9;
  background-color: #e6f7ff;
  display: flex;
  align-items: center;
  line-height: 1.8;
  min-height: 40px;

&.position-top{
  top:0;
  transform: translateX(-50%);
}
  &.position-middle{
    top:50%;
    transform: translate(-50%,-50%);
  }
  &.position-bottom{
    bottom:0;
    transform: translateX(-50%);
  }

}

.line {
  height: 100%;
  border-left: 1px solid #91d5ff;
  margin-left: 16px;
}

.close {
  margin-left: 6px;
  cursor: pointer;


  > .closeIcon {
    fill: #00000073;
    transition: .3s;
    transform: translate(30%, 15%);

    &:hover {
      fill: black;
    }

  }
}


</style>