<template>
  <div class="wrapper" :class="toastClass">
    <div class="toast" ref="toast" >
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
      <div class="line" ref="line"></div>
      <span v-if="closeButton" class="close" @click="onClickClose">
      <bl-icon name="close" class="closeIcon"></bl-icon>
    </span>
    </div>
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
@keyframes slideTop {
  0% {
    opacity: 0;
    transform: translateY(-100%)
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
}
@keyframes slideBottom {
  0% {
    opacity: 0;
    transform: translateY(100%)
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wrapper{
  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  &.position-top {
    top: 0;
    .toast{
      animation: slideTop .3s;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .toast{
      animation: fade .3s;
    }
  }

  &.position-bottom {
    bottom: 0;
    .toast{
      animation: slideBottom .3s;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }


  }
}

.toast {
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